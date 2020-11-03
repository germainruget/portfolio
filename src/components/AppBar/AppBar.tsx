import React, { useContext } from 'react';
import AppType from '../../config/AppType';

import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

import { AppsContext } from '../../context/apps-context';

import classes from './AppBar.module.scss';
import globalClasses from '../../global/style/Global.module.scss';

import AppBarIcon from '../UI/AppIcon/AppIcon';

interface Props {
   displayMenu: () => void;
   showMenu: boolean;
   displaySettings: () => void;
   showSettings: boolean;
   displayMobileMenu: () => void;
   showMobileMenu: boolean;
}

const AppBar: React.FC<Props> = ({ displayMenu, displaySettings, showSettings, showMenu, displayMobileMenu, showMobileMenu }) => {
   // console.log('RENDER APPBAR');
   useWhyDidYouUpdate('AppBar', { displayMenu, displaySettings, showSettings, showMenu, displayMobileMenu, showMobileMenu })
   const { config, open } = useContext(AppsContext);

   const allApps = Object.keys(AppType).map(key => {
      const app = config(AppType[key].name);

      let appOpen: boolean | undefined = false;
      let appActive: boolean | undefined = false;

      if (app !== null) {
         appOpen = !!app.open;
         appActive = !!app.active;
      }

      if (AppType[key].appBar || appOpen) {
         return (
            <AppBarIcon type={AppType[key].icon}
               action={() => open(AppType[key].name)}
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
         <div className={globalClasses.MobileOnly}>
            <AppBarIcon type='AppSwitch' action={displayMobileMenu} active={showMobileMenu} />
         </div>
         <AppBarIcon type='SettingTwo' action={displaySettings} active={showSettings} />
         <div className={[classes.Separator, globalClasses.DesktopOnly].join(' ')}></div>
         <div className={globalClasses.DesktopOnly} style={{width:'100%'}} >
            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
               <div>
                  {allApps}
               </div>
               <div>
                  <AppBarIcon type='AppSwitch' action={displayMobileMenu} active={showMobileMenu} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AppBar;