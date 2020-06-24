import React from 'react';

import styles from './Navigation.module.css';

interface Props {
  onRouteChange: (route) => void;
  isSignedIn: boolean;
}

const Navigation = (props: Props) => {
  return props.isSignedIn ? (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => props.onRouteChange('signout')}
        className='f3 link dim black underline pa3 pointer'
      >
        Sign Out
      </p>
    </nav>
  ) : (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => props.onRouteChange('signin')}
        className='f3 link dim black underline pa3 pointer'
      >
        Sign In
      </p>
      <p
        onClick={() => props.onRouteChange('register')}
        className='f3 link dim black underline pa3 pointer'
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
