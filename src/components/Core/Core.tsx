import React, { useContext, useRef } from 'react';

import { Config, AppsContext } from '../../context/apps-context';

import classes from './Core.module.scss';

import MainMenu from '../MainMenu/MainMenu';
import Settings from '../Settings/Settings';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

import Application from '../Application/Application';
import ChatHelper from '../ChatHelper/ChatHelper';
import { Action } from '../Desktop/Desktop';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface Props {
   menuState: any
   changeMenu: (type: Action['type']) => void;
}

const Core: React.FC<Props> = ({ changeMenu, menuState }) => {
   //ref pass to the application to constrain the drag to the CORE
   const constraintRef = useRef<HTMLDivElement>(null);

   const { appsConfig } = useContext(AppsContext);

   const Apps = appsConfig.map((config: Config) => {
      return <Application ref={constraintRef} config={config} key={config.name} />
   })

   return (
      <div className={classes.Core} >
         <div className={classes.CoreContent} ref={constraintRef} >
            <AnimatePresence>
               <BrowserRouter>
                  {menuState.showMenu && <MainMenu key='MainMenu' displayMenu={() => changeMenu('openMenu')} />}
                  {menuState.showMobileMenu && <MobileNavigation key='MobileNavigation' displayMobileMenu={() => changeMenu('openMobileMenu')} />}
                  {menuState.showSettings && <Settings key='Settings' displaySettings={() => changeMenu('openSettings')} />}
                  {Apps}
               </BrowserRouter>
            </AnimatePresence>
         </div>
         {/* <AnimatePresence> */}
         {menuState.showChatHelper && <ChatHelper key='ChatHelper' displayChatHelper={() => changeMenu('openChatHelper')} />}
         {/* </AnimatePresence> */}
      </div>
   );
}

export default React.memo(Core);