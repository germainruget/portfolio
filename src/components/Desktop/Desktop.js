import React, { useState, useEffect, useCallback } from 'react';

import classes from './Desktop.module.scss';

import defaultBG from '../../assets/images/mountains.jpg'

import AppBar from '../AppBar/AppBar';
import NotificationBar from '../NotificationBar/NotificationBar';
import Core from '../Core/Core';

const Desktop = () => {

   const [showMenu, setShowMenu] = useState(false);
   const [showSettings, setShowSettings] = useState(false);
   const [background, setBackground] = useState(defaultBG);
   const [loadBackground, setLoadBackground] = useState(false);

   const fetchImage = useCallback(src => {
      const image = new Image()
      image.onload = () => setLoadBackground(true);
      image.src = src
   }, []);

   useEffect(() => {
      fetchImage(defaultBG);
   }, [fetchImage]);


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

   let desktop = <p>LOading...</p>

   if (loadBackground) {
      desktop = (
         <div className={classes.Desktop} style={{ backgroundImage: `url(${background})` }}>
            <NotificationBar />
            <Core showMenu={showMenu} showSettings={showSettings} displayMenu={displayMainMenu} setBg={changeBackground} />
            <AppBar displayMenu={displayMainMenu} showMenu={showMenu} displaySettings={displaySettings} showSettings={showSettings} />
         </div>
      )
   }


   return desktop;
}

export default Desktop;