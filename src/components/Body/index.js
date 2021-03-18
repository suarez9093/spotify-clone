import React from 'react';
import Header from '../Header';
import './Body.css';
function Body({ spotify }) {
  return (
    <div className='body'>
      <Header />
      <div className='body__info'>
        <img
          src='https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
          alt=''
        />
        <div className='body__infoText'>
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
