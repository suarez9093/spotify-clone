import React, { useContext, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { context } from './context/index';
import { getTokenFromURL } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const { token, setToken, setUser, user } = useContext(context);
  useEffect(() => {
    const hash = getTokenFromURL();

    window.location.hash = '';
    if (hash.access_token) {
      setToken(hash.access_token);
      spotify.setAccessToken(hash.access_token);
      spotify.getMe().then((res) => setUser(res));
    }
  }, []);
  console.log(user);
  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
