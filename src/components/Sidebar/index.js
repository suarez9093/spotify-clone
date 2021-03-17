import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='spotify'
      />
      <SidebarOption title='Home' />
      <SidebarOption title='Home' />
      <SidebarOption title='Home' />
    </div>
  );
}

export default Sidebar;
