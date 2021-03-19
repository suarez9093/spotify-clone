import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import React, { useContext } from 'react';
import { context } from '../../context/index';
import Header from '../Header';
import SongRow from '../SongRow';
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
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discoverWeekly?.tracks.items.map((track) => (
          <SongRow track={track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
