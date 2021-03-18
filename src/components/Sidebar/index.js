import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext } from 'react';
import { context } from '../../context/index';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
function Sidebar() {
  const { setPlaylists, playlists } = useContext(context);
  console.log('playlists', playlists);
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='spotify'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Library' Icon={LibraryBooksIcon} />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists.items
        ? playlists.items.map((playlist) => (
            <SidebarOption title={playlist.name} />
          ))
        : null}
    </div>
  );
}

export default Sidebar;
