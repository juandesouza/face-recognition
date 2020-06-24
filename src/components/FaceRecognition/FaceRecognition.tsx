import React from 'react';

import styles from './FaceRecognition.module.css';

interface Props {
  imageUrl: string;
  box: {
    topRow: number;
    rightCol: number;
    bottomRow: number;
    leftCol: number;
  };
}

const FaceRecognition: React.FC<Props> = ({ imageUrl, box }) => {
  return (
    <div
      className={`absolute ma ${styles.heyy}`}
      style={{ maxWidth: '100%', display: 'hidden' }}
    >
      <div className='mt3'>
        <img
          id='inputimage'
          src={imageUrl}
          alt=''
          width='500px'
          height='auto'
        />
        <div
          className={styles.boundingbox}
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
