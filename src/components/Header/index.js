import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input
          type='search'
          placeholder='Search for Artists, Songs or Playlists'
        />
      </div>
      <div className='header__right'></div>
    </header>
  );
}

export default Header;
