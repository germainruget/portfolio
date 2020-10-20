import React from 'react';
import classes from './Settings.module.scss';

import Wallpapers from './Wallpapers/Wallpapers';

const Settings = props => {

   const settingsClasses = [classes.Settings];
   if(props.showSettings){
      settingsClasses.push(classes.Active);
   }

   return (
      <div className={settingsClasses.join(' ')}>
         <h2>Settings</h2>
         <hr/>
         <h3>Wallpaper</h3>
         <Wallpapers setBg={props.setBg}/>
      </div>
   );
}

export default Settings;