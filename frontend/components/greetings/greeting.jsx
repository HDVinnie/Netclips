import React from 'react';
import { Link, withRouter } from 'react-router';

const Greeting = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  if (currentUser) {
    return (
      <div>
        <h1>{currentUser.username}</h1>
        <button onClick={logout}>Sign out of NetClips</button>
      </div>
    );
  } else {
    return (
      <div className='entry-background'>
        <img className='logo main-logo' onClick={_redirectToMain} />
        <div className='group'>
          <Link to="signin" className='jumbo-button sign-in'>Sign In</Link>
        </div>

        <div className='join-motto'>
          <p className='motto motto-header'>See what's next.</p>
          <p className='motto motto-body'>Watch anywhere. Cancel anytime.</p>
          <div className='group'>
            <Link to="signup"
              className='jumbo-button sign-up'>Join Free</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Greeting);
