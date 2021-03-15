import React, { useContext, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { context } from './context/index';
import { getTokenFromURL } from './spotify';

function App() {
  const { token, setToken } = useContext(context);
  useEffect(() => {
    const hash = getTokenFromURL();
    console.log('hash ', hash);

    window.location.hash = '';
    if (hash.access_token) {
      setToken(hash.access_token);
    }
  }, []);
  return (
    <div className='app'>
      {token ? <Player /> : <Login />}
      {/* Spotify Logo */}
      {/*  Login with spotify button */}
    </div>
  );
}

export default App;
