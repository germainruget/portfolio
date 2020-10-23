import React, {useContext} from 'react';
import AppType from '../../config/AppType';

import {AppsContext} from '../../context/apps-context';

import classes from './AppBar.module.scss';
import AppBarIcon from '../UI/AppIcon/AppIcon';

const AppBar = React.memo(props => {
   // console.log('RENDER APPBAR');

   const appsContext = useContext(AppsContext);
   
   const allApps = Object.keys(AppType).map(key => {
      const appOpen = appsContext.config(AppType[key].name).open;
      if(AppType[key].appBar || appOpen){
         return (
            <AppBarIcon type={AppType[key].icon}
                        action={() => appsContext.open(AppType[key].name)}
                        active={appsContext.config(AppType[key].name).active}
                        open={appOpen}
                        key={key} />
         );
      }
      else{
         return null;
      }
   });

   return ( 
      <div className={classes.AppBar}>
         <AppBarIcon type='GridTwo' action={props.displayMenu} active={props.showMenu}/>
         <AppBarIcon type='SettingTwo' action={props.displaySettings} active={props.showSettings}/>
         <div className={classes.Separator}></div>
         {allApps}
      </div>
    );
});
 
export default AppBar;