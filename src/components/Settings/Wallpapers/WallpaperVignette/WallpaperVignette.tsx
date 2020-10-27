import React from 'react';

import classes from './WallpaperVignette.module.scss';

interface Props {
   clicked: () => void;
   vignette: string;
}

const WallpaperVignette: React.FC<Props> = ({ clicked, vignette }) => {
   return (
      <div onClick={clicked} className={classes.WallpaperVignette} style={{ backgroundImage: `url(${vignette})` }} ></div>
   );
}

export default WallpaperVignette;