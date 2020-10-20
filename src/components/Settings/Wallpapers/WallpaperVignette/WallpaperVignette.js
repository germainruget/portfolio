import React from 'react';

import classes from './WallpaperVignette.module.scss';

const WallpaperVignette = props => {
   return ( 
      <div  onClick={props.clicked} className={classes.WallpaperVignette} style={{backgroundImage: `url(${props.vignette})`}} ></div>
    );
}
 
export default WallpaperVignette;