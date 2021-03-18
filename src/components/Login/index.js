import React from 'react';
import { loginUrl } from '../../spotify';
import './Login.css';
function Login() {
  return (
    <div className='login'>
      <img
        src='https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png'
        alt='spotify logo'
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
