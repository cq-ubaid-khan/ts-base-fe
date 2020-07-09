import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: (auth: boolean) => {},
});

export const useAuth = () => useContext(AuthContext);
