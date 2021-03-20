import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext } from 'react';
import { context } from '../../context/index';
import './Header.css';
function Header() {
  const { user } = useContext(context);
  return (
    <header className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input
          type='search'
          placeholder='Search for Artists, Songs or Playlists'
        />
      </div>
      <div className='header__right'>
        <Avatar
          src={user ? user.images[0].url : null}
          alt={user ? user.display_name : null}
        />
        <h4>{user ? user.display_name : 'User'}</h4>
      </div>
    </header>
  );
}

export default Header;
