import React from 'react';
import Tilt from 'react-tilt';

import styles from './Logo.module.css';
import brain from './brain.png';

interface Props {}

const Logo = (props: Props) => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className={`br2 shadow-2 ${styles.Tilt}`}
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div
          className='Tilt-inner pa3'
          style={{ textAlign: 'center' }}
        >
          <img
            src={brain}
            alt='brain logo'
            style={{
              width: '90%',
              height: '90%',
              margin: '10px',
            }}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
