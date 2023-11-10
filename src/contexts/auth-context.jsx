import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ username: undefined });

  return (
    <AuthContext.Provider
      value={{
        auth: auth,
        setAuth: setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
