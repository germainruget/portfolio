import React, {useContext} from 'react';
import {AppsContext} from '../../context/apps-context';

import classes from './Core.module.scss';

import MainMenu from '../MainMenu/MainMenu';
import Settings from '../Settings/Settings';

import Application from '../Application/Application';

const Core = props => {
   console.log('RENDER CORE');
   const appsContext = useContext(AppsContext);
   const Apps = appsContext.appsConfig.map(config => {
      return <Application config={config} close={appsContext.close} reduce={appsContext.reduce} key={config.name} onFront={appsContext.onFront}/>
   })
   // console.log(Apps);
   
   return ( 
      <div className={classes.Core}>
         <MainMenu showMenu={props.showMenu} displayMenu={props.displayMenu} appsContext={appsContext}/>
         <Settings showSettings={props.showSettings} setBg={props.setBg}/>
         {Apps}
      </div>
    );
}
 
export default Core;