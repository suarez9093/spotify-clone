import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [discoverWeekly, setDiscoverWeekly] = useState(null);

  return (
    <context.Provider
      value={{
        setToken,
        token,
        setUser,
        user,
        playlists,
        discoverWeekly,
        setPlaylists,
        setDiscoverWeekly,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
