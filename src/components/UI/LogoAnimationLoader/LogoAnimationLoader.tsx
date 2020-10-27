import React from 'react';

import classes from './LogoAnimationLoader.module.scss'

interface Props{
   message: string;
}

const LogoAnimationLoader: React.FC<Props> = ({message}) => {
   return (
      <div className={classes.Container}>
         <div className={classes.LoadingEllipses}><div></div><div></div><div></div><div></div></div>
         <div>{message}</div>
      </div>
   );
}

export default LogoAnimationLoader;