import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <p>Albumn and song details</p>
      </div>
      <div className='footer__center'>
        <p>player controls</p>
      </div>
      <div className='footer__right'>volume controls</div>
    </div>
  );
}

export default Footer;
