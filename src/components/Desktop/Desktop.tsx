import React, { useState, useEffect, useCallback } from 'react';

import AppsContextProvider from '../../context/apps-context';

import useWindowSize from '../../hooks/useWindowSize';

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
   const [showChatHelper, setShowChatHelper] = useState(false);

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
      setShowMenu(v => !v);
      setShowSettings(false);
      setShowMobileMenu(false);
      setShowChatHelper(false);
   }, []);

   const displayMobileMenu = useCallback(() => {
      setShowMobileMenu(v => !v);
      setShowSettings(false);
      setShowMenu(false);
      setShowChatHelper(false);
   }, []);

   const displaySettings = useCallback((cb?: void) => {
      setShowSettings(v => !v);
      setShowMenu(false);
      setShowMobileMenu(false);
      setShowChatHelper(false);
      return cb;
   }, []);

   const displayChatHelper = useCallback((cb?: void) => {
      setShowChatHelper(v => !v);
      setShowSettings(false);
      setShowMenu(false);
      setShowMobileMenu(false);
      return cb;
   }, []);

   const changeBackground = useCallback((bg): void => {
      setBackground(bg);
   }, []);

   let desktop = <p>LOading...</p>

   if (loadBackground) {
      desktop = (
         <div className={classes.Desktop} style={{ backgroundImage: `url(${background})`, height: windowSize.height }}>

            <NotificationBar />
            <AppsContextProvider>
               <Core showMenu={showMenu}
                  displayMenu={displayMainMenu}
                  showMobileMenu={showMobileMenu}
                  displayMobileMenu={displayMobileMenu}
                  showSettings={showSettings}
                  setBg={changeBackground}
                  showChatHelper={showChatHelper} />

               <AppBar displayMenu={displayMainMenu}
                  showMenu={showMenu}
                  displaySettings={displaySettings}
                  showSettings={showSettings}
                  displayMobileMenu={displayMobileMenu}
                  showMobileMenu={showMobileMenu}
                  displayChatHelper={displayChatHelper}
                  showChatHelper={showChatHelper} />
            </AppsContextProvider>
         </div>
      )
   }


   return desktop;
}

export default Desktop;