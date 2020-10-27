import React, { useContext } from 'react';
import AppType from '../../config/AppType';

import { AppsContext } from '../../context/apps-context';

import classes from './AppBar.module.scss';
import globalClasses from '../../global/style/Global.module.scss';

import AppBarIcon from '../UI/AppIcon/AppIcon';

interface Props {
   displayMenu: () => void;
   displaySettings: () => void;
   showMenu: boolean;
   showSettings: boolean;
}

const AppBar: React.FC<Props> = ({ displayMenu, displaySettings, showSettings, showMenu }) => {
   // console.log('RENDER APPBAR');

   const appsContext = useContext(AppsContext);

   const allApps = Object.keys(AppType).map(key => {
      const app = appsContext.config(AppType[key].name);

      let appOpen:boolean | undefined = false;
      let appActive:boolean | undefined = false;

      if (app !== null ){
         appOpen = !!app.open;
         appActive = !!app.active;
      }
      
      if (AppType[key].appBar || appOpen) {
         return (
            <AppBarIcon type={AppType[key].icon}
               action={() => appsContext.open(AppType[key].name)}
               active={appActive}
               open={appOpen}
               key={key} />
         );
      }
      else {
         return null;
      }
   });

   return (
      <div className={classes.AppBar}>
         <AppBarIcon type='GridTwo' action={displayMenu} active={showMenu} />
         <AppBarIcon type='SettingTwo' action={displaySettings} active={showSettings} />
         <div className={[classes.Separator, globalClasses.DesktopOnly].join(' ')}></div>
         <div className={globalClasses.DesktopOnly}>
            {allApps}
         </div>
      </div>
   );
};

export default AppBar;