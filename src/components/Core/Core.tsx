import React, {useContext} from 'react';
import {Config, AppsContext} from '../../context/apps-context';

import classes from './Core.module.scss';

import MainMenu from '../MainMenu/MainMenu';
import Settings from '../Settings/Settings';

import Application from '../Application/Application';

interface Props{
   showMenu: boolean;
   showSettings: boolean;
   displayMenu: () => void;
   setBg: (bg:any) => void;
}

const Core: React.FC<Props> = ({displayMenu, setBg, showMenu, showSettings}) => {
   // console.log('RENDER CORE');
   const appsContext = useContext(AppsContext);
   const Apps = appsContext.appsConfig.map((config:Config) => {
      return <Application config={config} close={appsContext.close} reduce={appsContext.reduce} key={config.name} onFront={appsContext.onFront}/>
   })
   // console.log(Apps);

   const openApp = (appName:string):void => {
      appsContext.open(appName);
   }
   
   return ( 
      <div className={classes.Core}>
         <MainMenu showMenu={showMenu} displayMenu={displayMenu} open={openApp}/>
         <Settings showSettings={showSettings} setBg={setBg}/>
         {Apps}
      </div>
    );
}
 
export default Core;