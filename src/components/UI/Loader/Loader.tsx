import React from 'react';

import classes from './Loader.module.scss';

const LoadingIndicator = () => (
  <div className={classes.LdsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;
