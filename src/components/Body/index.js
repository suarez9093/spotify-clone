import React, { useContext } from 'react';
import { context } from '../../context/index';
import Header from '../Header';
import './Body.css';
function Body({ spotify }) {
  const { discoverWeekly } = useContext(context);
  console.log(discoverWeekly);
  return (
    <div className='body'>
      <Header />
      <div className='body__info'>
        <img
          src={discoverWeekly ? discoverWeekly.images[0].url : null}
          alt=''
        />
        <div className='body__infoText'>
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly ? discoverWeekly.description : null}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
