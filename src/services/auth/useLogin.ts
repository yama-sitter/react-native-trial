import { useState, useCallback } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const login = useCallback(
    async () => Promise.resolve(null),
    [email, password]
  );

  return {
    email,
    password,
    setEmail,
    setPassword,
    login,
  };
};
