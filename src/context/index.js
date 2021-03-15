import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <context.Provider value={{ setToken, token }}>{children}</context.Provider>
  );
}

export { ContextProvider, context };
