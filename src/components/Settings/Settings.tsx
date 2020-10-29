import React from 'react';
import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

import classes from './Settings.module.scss';

import Wallpapers from './Wallpapers/Wallpapers';

interface Props{
   showSettings: boolean;
   setBg:(bg:any) => void;
}

const Settings:React.FC<Props> = ({setBg, showSettings}) => {
   useWhyDidYouUpdate('Settings', {setBg, showSettings})
   
   const settingsClasses = [classes.Settings];
   if(showSettings){
      settingsClasses.push(classes.Active);
   }

   return (
      <div className={settingsClasses.join(' ')}>
         <h2>Settings</h2>
         <hr/>
         <h3>Wallpaper</h3>
         <Wallpapers setBg={setBg}/>
      </div>
   );
}

export default React.memo(Settings);