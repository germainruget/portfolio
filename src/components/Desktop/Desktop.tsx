import React, { useState, useEffect, useCallback } from 'react';
import useWindowSize from '../../hooks/windowSize';

import classes from './Desktop.module.scss';

import defaultBG from '../../assets/images/mountains.jpg'

import AppBar from '../AppBar/AppBar';
import NotificationBar from '../NotificationBar/NotificationBar';
import Core from '../Core/Core';

const Desktop: React.FC = () => {
   const windowSize = useWindowSize();
   
   const [showMenu, setShowMenu] = useState(false);
   const [showSettings, setShowSettings] = useState(false);
   const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      setShowMobileMenu(false);
   }, [showMenu]);

   const displayMobileMenu = useCallback(() => {
      setShowMobileMenu(!showMobileMenu);
      setShowSettings(false);
      setShowMenu(false);
   }, [showMobileMenu]);

   const displaySettings = useCallback((cb?:void) => {
      setShowSettings(!showSettings);
      setShowMenu(false);
      setShowMobileMenu(false);
      return cb;
   }, [showSettings]);

   const changeBackground = useCallback((bg):void => {
      setBackground(bg);
   }, []);

   let desktop = <p>LOading...</p>

   if (loadBackground) {
      desktop = (
         <div className={classes.Desktop} style={{ backgroundImage: `url(${background})`, height: windowSize.height }}>

            <NotificationBar />

            <Core showMenu={showMenu}
                  displayMenu={displayMainMenu}
                  showMobileMenu={showMobileMenu}
                  displayMobileMenu={displayMobileMenu}
                  showSettings={showSettings}
                  setBg={changeBackground} />

            <AppBar  displayMenu={displayMainMenu}
                     showMenu={showMenu}
                     displaySettings={displaySettings}
                     showSettings={showSettings} 
                     displayMobileMenu={displayMobileMenu}
                     showMobileMenu={showMobileMenu} />
         </div>
      )
   }


   return desktop;
}

export default Desktop;