import { useState, useCallback } from 'react';

export const useSignUp = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const signUp = useCallback(
    async () => Promise.resolve(null),
    [email, password]
  );

  return {
    email,
    password,
    setEmail,
    setPassword,
    signUp,
  };
};
