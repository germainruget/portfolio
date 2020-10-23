import React, { useState, useCallback } from 'react';

import classes from './Desktop.module.scss';

import defaultBG from '../../assets/images/mountains.jpg'

import AppBar from '../AppBar/AppBar';
import NotificationBar from '../NotificationBar/NotificationBar';
import Core from '../Core/Core';

const Desktop = () => {

   const [showMenu, setShowMenu] = useState(false);
   const [showSettings, setShowSettings] = useState(false);
   const [background, setBackground] = useState(defaultBG);

   const displayMainMenu = useCallback(() => {
      setShowMenu(!showMenu);
      setShowSettings(false);
   }, [showMenu]);

   const displaySettings = useCallback((cb) => {
      setShowSettings(!showSettings);
      setShowMenu(false);
      return cb;
   }, [showSettings]);

   const changeBackground = useCallback((bg) => {
      setBackground(bg);
   }, []);


   return (
      <div className={classes.Desktop} style={{ backgroundImage: `url(${background})` }}>
         <NotificationBar />
         <Core showMenu={showMenu} showSettings={showSettings} displayMenu={displayMainMenu} setBg={changeBackground} />
         <AppBar displayMenu={displayMainMenu} showMenu={showMenu} displaySettings={displaySettings} showSettings={showSettings} />
      </div>
   );
}

export default Desktop;