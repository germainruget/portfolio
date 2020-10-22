import React from 'react';

import classes from './LogoAnimationLoader.module.scss'

const LogoAnimationLoader = (props) => {
   return (
      <div className={classes.Container}>
         <div className={classes.LoadingEllipses}><div></div><div></div><div></div><div></div></div>
         <div>{props.message}</div>
      </div>
   );
}

export default LogoAnimationLoader;