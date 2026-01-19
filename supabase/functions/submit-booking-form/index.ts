import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  eventDate: string;
  eventTime: string;
  eventTimeAmPm: string;
  eventLocation: string;
  venueType: string;
  stageSpace: string;
  ceilingHeight: string;
  ceilingHeightUnit: string;
  outdoorCeiling?: string;
  performanceDuration: string;
  specialRequests?: string;
  referralSource?: string;
  agreeToTerms: boolean;
  turnstileToken: string;
}

async function verifyTurnstile(token: string, secretKey: string): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log('Turnstile verification result:', result);
    return result.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: BookingFormData = await req.json();
    console.log('Received booking form submission for:', formData.email);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.turnstileToken) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify Turnstile token
    const secretKey = Deno.env.get('TURNSTILE_SECRET_KEY');
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const isValid = await verifyTurnstile(formData.turnstileToken, secretKey);
    if (!isValid) {
      console.error('Turnstile verification failed');
      return new Response(
        JSON.stringify({ error: 'Security verification failed. Please try again.' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Turnstile verification passed, submitting to Formspree');

    // Format ceiling height
    const ceilingDisplay = formData.outdoorCeiling === 'unlimited' 
      ? 'Outdoors - No ceiling limit'
      : `${formData.ceilingHeight} ${formData.ceilingHeightUnit}`;

    // Submit to Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/mgvydegl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization || 'Not provided',
        eventDate: formData.eventDate,
        eventTime: `${formData.eventTime} ${formData.eventTimeAmPm}`,
        eventLocation: formData.eventLocation,
        venueType: formData.venueType,
        stageSpace: formData.stageSpace,
        ceilingHeight: ceilingDisplay,
        performanceDuration: formData.performanceDuration,
        specialRequests: formData.specialRequests || 'None',
        referralSource: formData.referralSource || 'Not specified',
        _replyto: formData.email,
        _subject: `Booking Request - ${formData.eventDate}`,
      }),
    });

    if (!formspreeResponse.ok) {
      console.error('Formspree submission failed:', formspreeResponse.status);
      return new Response(
        JSON.stringify({ error: 'Failed to submit form' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Form submitted successfully');
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
