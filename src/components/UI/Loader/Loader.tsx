import React from 'react';

import classes from './Loader.module.scss';

interface LoadingIndicatorProps {
  type?: 'ring' | 'ellips';
  size?: number;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ type = 'ring', size = 1 }) => {

  let style = classes.LdsRing;
  if(type === 'ellips') style = classes.LdsEllips;

  return (
    <div className={style} style={{transform:`scale(${size})`}}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default LoadingIndicator;
