import React from 'react';
import './Spinner.css';

export const Spinner = ({ size }) => {
  return (
    <div className='spinner-container'>
      <div className={`spinner ${size}`} />
    </div>
  );
};
