import React, { useState, useCallback, useReducer } from 'react';

import AppsContextProvider from '../../context/apps-context';

import useWindowSize from '../../hooks/useWindowSize';

import Logo from '../../assets/logo.svg';

import classes from './Desktop.module.scss';

import AppBar from '../AppBar/AppBar';
import NotificationBar from '../NotificationBar/NotificationBar';
import Core from '../Core/Core';
import Loader from '../Loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';

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
         return { ...initialState, showChatHelper: state.showChatHelper, showMenu: !state.showMenu };
      case 'openSettings':
         return { ...initialState, showChatHelper: state.showChatHelper, showSettings: !state.showSettings };
      case 'openMobileMenu':
         return { ...initialState, showChatHelper: state.showChatHelper, showMobileMenu: !state.showMobileMenu };
      case 'openChatHelper':
         return { ...state, showChatHelper: !state.showChatHelper };
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

   const [animationComplete, setAnimationComplete] = useState(false);

   const setAnimationCompleteHandler = () => {
      setTimeout(() => {
         setAnimationComplete(true);
      }, 500);
   }

   return (
      <AnimatePresence>
         {!animationComplete &&
            <motion.div
               key="LoaderContainer"
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2, ease: "easeInOut" }}>
               <Loader onAnimationComplete={setAnimationCompleteHandler} />
            </motion.div>
         }
         <div className={classes.Desktop} style={{ height: windowSize.height, backgroundImage:`url(${Logo})` }}>
            <NotificationBar />
            <AppsContextProvider>
               <Core
                  menuState={state}
                  changeMenu={changeMenu} />

               <AppBar
                  menuState={state}
                  changeMenu={changeMenu} />
            </AppsContextProvider>
         </div>
      </AnimatePresence>
   );
}

export default Desktop;