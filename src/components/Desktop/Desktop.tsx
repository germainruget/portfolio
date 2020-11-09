import React, { useState, useEffect, useCallback, useReducer } from 'react';

import AppsContextProvider from '../../context/apps-context';

import useWindowSize from '../../hooks/useWindowSize';

import classes from './Desktop.module.scss';

import defaultBG from '../../assets/images/mountains.jpg'

import AppBar from '../AppBar/AppBar';
import NotificationBar from '../NotificationBar/NotificationBar';
import Core from '../Core/Core';

interface State {
   showMenu: boolean,
   showSettings: boolean,
   showMobileMenu: boolean,
   showChatHelper: boolean,
}

const initialState: State = {
   showMenu: false,
   showSettings: false,
   showMobileMenu: false,
   showChatHelper: true,
}

export interface Action {
   type: 'openMenu' | 'openSettings' | 'openMobileMenu' | 'openChatHelper'
}

const menusReducer = (state: State, action: Action) => {
   switch (action.type) {
      case 'openMenu':
         return { ...initialState, showMenu: !state.showMenu };
      case 'openSettings':
         return { ...initialState, showSettings: !state.showSettings };
      case 'openMobileMenu':
         return { ...initialState, showMobileMenu: !state.showMobileMenu };
      case 'openChatHelper':
         return { ...initialState, showChatHelper: !state.showChatHelper };
      default:
         throw new Error('Forgot to define an action');
   }
}

const Desktop: React.FC = () => {
   const windowSize = useWindowSize();

   const [state, dispatch] = useReducer(menusReducer, initialState);

   const changeMenu = useCallback((action: Action["type"]) => {
      dispatch({ type: action });
   }, [])

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


   const changeBackground = useCallback((bg): void => {
      setBackground(bg);
   }, []);

   let desktop = <p>LOading...</p>

   if (loadBackground) {
      desktop = (
         <div className={classes.Desktop} style={{ backgroundImage: `url(${background})`, height: windowSize.height }}>

            <NotificationBar />
            <AppsContextProvider>
               <Core
                  menuState={state}
                  changeMenu={changeMenu}
                  setBg={changeBackground} />

               <AppBar
                  menuState={state}
                  changeMenu={changeMenu} />
            </AppsContextProvider>
         </div>
      )
   }


   return desktop;
}

export default Desktop;