import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <context.Provider value={{ setToken, token, setUser, user }}>
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
