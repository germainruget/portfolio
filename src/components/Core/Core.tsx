import React, { useContext, useRef } from 'react';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';

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
   setBg: (bg: any) => void;
}

const Core: React.FC<Props> = ({ changeMenu, setBg, menuState }) => {
   useWhyDidYouUpdate('Core', { setBg, changeMenu, menuState })
   //ref pass to the application to constrain the drag to the CORE
   const constraintRef = useRef<HTMLDivElement>(null);

   const appsContext = useContext(AppsContext);

   const Apps = appsContext.appsConfig.map((config: Config) => {
      return <Application ref={constraintRef} config={config} key={config.name} />
   })

   return (
      <div ref={constraintRef} className={classes.Core}>
         <BrowserRouter>
            <AnimatePresence>
               {menuState.showMenu && <MainMenu displayMenu={() => changeMenu('openMenu')} />}
               {menuState.showMobileMenu && <MobileNavigation displayMobileMenu={() => changeMenu('openMobileMenu')} />}
               {menuState.showSettings && <Settings setBg={setBg} />}
               {menuState.showChatHelper && <ChatHelper />}
            </AnimatePresence>
            {Apps}
         </BrowserRouter>
      </div>
   );
}

export default React.memo(Core);