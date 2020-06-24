import React, { ChangeEvent } from 'react';
import styles from './ImageLinkForm.module.css';

interface Props {
  onInputChange: (event) => void;
  onButtonSubmit: () => void;
}

const ImageLinkForm: React.FC<Props> = ({
  onInputChange,
  onButtonSubmit,
}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p className={`f3`}>
        {
          'This magic brain will detect faces in your pictures. Give it a try.'
        }
      </p>
      <div className={`${styles.center}`}>
        <div className={`${styles.form} pa4 br3 shadow-5`}>
          <input
            className={`f4 pa2 w-70 center`}
            type='text'
            onChange={onInputChange}
          />
          <button
            className={`w-30 grow f4 link ph3 pv2 dib white bg-light-purple`}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
