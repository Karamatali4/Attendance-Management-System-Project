
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const  useAuth = () => {
    const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
}

