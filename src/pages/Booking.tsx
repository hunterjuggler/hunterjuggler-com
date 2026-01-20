
import { Helmet } from "react-helmet-async";
import BookingHero from "@/components/booking/BookingHero";
import BookingForm from "@/components/booking/BookingForm";

const BookingPage = () => {
  return (
    <div className="pt-20 w-full">
      <Helmet>
        <title>Book Hunter Way | Hire a Professional Comedy Juggler for Your Event</title>
        <meta name="description" content="Request a booking for Hunter Way, professional comedy juggler and circus entertainer. Available for corporate events, festivals, weddings, and private parties. Fill out the form to get started." />
      </Helmet>
      
      {/* Hero Section */}
      <BookingHero />

      {/* Booking Form Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
