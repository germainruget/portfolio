import React from 'react';

import Utah from '../../../assets/images/utah.jpg';
import Dawn from '../../../assets/images/dawn.jpg';
import Mountains from '../../../assets/images/mountains.jpg';

import classes from './Wallpapers.module.scss';

import WallpaperVignette from './WallpaperVignette/WallpaperVignette';

const Wallpapers = props => {
   return ( 
      <div className={classes.Wallpapers}>
         <WallpaperVignette clicked={() => props.setBg(Utah)} vignette={Utah} />
         <WallpaperVignette clicked={() => props.setBg(Dawn)} vignette={Dawn} />
         <WallpaperVignette clicked={() => props.setBg(Mountains)} vignette={Mountains} />
      </div>
    );
}
 
export default Wallpapers;