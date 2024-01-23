import * as React from 'react';
import { useState, createContext } from 'react';


export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);

  return loaded ? <AuthContext.Provider value={user}>{children}</AuthContext.Provider> : null;
};

