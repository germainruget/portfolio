import React, { useContext, useRef } from 'react';
import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

import { Config, AppsContext } from '../../context/apps-context';

import classes from './Core.module.scss';

import MainMenu from '../MainMenu/MainMenu';
import Settings from '../Settings/Settings';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

import Application from '../Application/Application';
import ChatHelper from '../ChatHelper/ChatHelper';

interface Props {
   showMenu: boolean;
   displayMenu: () => void;

   showSettings: boolean;
   setBg: (bg: any) => void;
   
   showMobileMenu: boolean;
   displayMobileMenu: () => void;

   showChatHelper: boolean;
}

const Core: React.FC<Props> = ({ displayMenu, setBg, showMenu, showSettings, showMobileMenu, displayMobileMenu, showChatHelper }) => {
   useWhyDidYouUpdate('Core', { displayMenu, setBg, showMenu, showSettings, showMobileMenu, displayMobileMenu })
   //ref pass to the application to constrain the drag to the CORE
   const constraintRef = useRef<HTMLDivElement>(null);

   const appsContext = useContext(AppsContext);

   const Apps = appsContext.appsConfig.map((config: Config) => {
      return <Application ref={constraintRef} config={config} /*close={appsContext.close} reduce={appsContext.reduce} onFront={appsContext.onFront}*/ key={config.name} />
   })

   return (
      <div ref={constraintRef} className={classes.Core}>
         <MainMenu showMenu={showMenu} displayMenu={displayMenu} /*open={appsContext.open}*/ />
         <MobileNavigation showMobileMenu={showMobileMenu} displayMobileMenu={displayMobileMenu} />
         <Settings showSettings={showSettings} setBg={setBg} />
         <ChatHelper showChat={showChatHelper} />
         {Apps}   
      </div>
   );
}

export default React.memo(Core);