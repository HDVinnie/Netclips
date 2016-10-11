import React from 'react';
import SearchContainer from '../search/search_container';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  const currentUsername = (currentUser) ? currentUser.username : '';

  return (
    <div className='nav-header group'>
      <div className='nav'>
        <h1 className='logo nav-logo' onClick={_redirectToMain} />
        <div className='nav-user'>{currentUsername}
          <ul className='nav-dropdown'>
            <li className='nav-dropdown-item'>
              <h1>My Account</h1>
            </li>
            <li className='nav-dropdown-item'>
              <button onClick={logout}>Sign out of NetClips</button>
            </li>
          </ul>
        </div>
        <div className='search-bar-container'>
          <SearchContainer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
