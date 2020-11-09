import React, { useContext } from 'react';
import AppType from '../../config/AppType';

import { AppsContext } from '../../context/apps-context';

import classes from './AppBar.module.scss';
import globalClasses from '../../global/style/Global.module.scss';

import AppBarIcon from '../UI/AppIcon/AppIcon';
import { Action } from '../Desktop/Desktop';

interface Props {
   menuState: any;
   changeMenu: (type: Action['type']) => void;
}

const AppBar: React.FC<Props> = ({ menuState, changeMenu }) => {

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
         <AppBarIcon type='GridTwo' action={() => changeMenu('openMenu')} active={menuState.showMenu} data-tour="menu" />
         <div className={globalClasses.MobileOnly}>
            <AppBarIcon type='AppSwitch' action={() => changeMenu('openMobileMenu')} active={menuState.showMobileMenu} />
         </div>
         <AppBarIcon type='SettingTwo' action={() => changeMenu('openSettings')} active={menuState.showSettings} data-tour="settings" />
         <div className={[classes.Separator, globalClasses.DesktopOnly].join(' ')}></div>

         <div className={globalClasses.DesktopOnly} style={{ width: '100%' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
               <div data-tour="icons-apps">
                  {allApps}
               </div>
               <div>
                  <AppBarIcon type='AppSwitch' action={() => changeMenu('openMobileMenu')} active={menuState.showMobileMenu} />
               </div>
            </div>
         </div>

         <AppBarIcon data-tour="chat" type='Wechat' action={() => changeMenu('openChatHelper')} active={menuState.showChatHelper} />
      </div>
   );
};

export default AppBar;