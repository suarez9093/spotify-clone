import React from 'react';
import './SongRow.css';
function SongRow({ track }) {
  console.log('track', track);
  return (
    <div className='songRow'>
      <img
        className='songRow__albumImage'
        src={track.track.album.images[0].url}
        alt=''
      />
      <div className='songRow__info'>
        <p>{track.track.album.name}</p>
        <p>{track.track.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default SongRow;
