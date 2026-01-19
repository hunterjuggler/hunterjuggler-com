import { useState, useCallback } from 'react';

export const useTurnstile = () => {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState(false);

  const onTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setTurnstileError(false);
  }, []);

  const onTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileError(true);
  }, []);

  const onTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileError(false);
  }, []);

  return {
    turnstileToken,
    turnstileError,
    onTurnstileVerify,
    onTurnstileError,
    onTurnstileExpire,
    resetTurnstile,
    isVerified: !!turnstileToken,
  };
};
