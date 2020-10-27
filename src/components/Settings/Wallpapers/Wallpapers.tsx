import React from 'react';

import Utah from '../../../assets/images/utah.jpg';
import Dawn from '../../../assets/images/dawn.jpg';
import Mountains from '../../../assets/images/mountains.jpg';

import classes from './Wallpapers.module.scss';

import WallpaperVignette from './WallpaperVignette/WallpaperVignette';

interface Props{
   setBg: (bg:string) => void;
}

const Wallpapers:React.FC<Props> = ({setBg}) => {
   return ( 
      <div className={classes.Wallpapers}>
         <WallpaperVignette clicked={() => setBg(Utah)} vignette={Utah} />
         <WallpaperVignette clicked={() => setBg(Dawn)} vignette={Dawn} />
         <WallpaperVignette clicked={() => setBg(Mountains)} vignette={Mountains} />
      </div>
    );
}
 
export default Wallpapers;