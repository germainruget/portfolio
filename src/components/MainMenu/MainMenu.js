import React, { useState, useCallback } from 'react';
import useWindowSize from '../../hooks/windowSize';

import AppType from '../../config/AppType';


import classes from './MainMenu.module.scss';

import AppIcon from '../UI/AppIcon/AppIcon';
import Search from './Search/Search';

const MainMenu = props => {
   // console.log('RENDER MAIN MENU');
   const windowSize = useWindowSize();
   let menu = null;
   
   const [apps, setApps] = useState(AppType);
   const iconsApps = Object.keys(apps).map(key => {

      if(windowSize.width < 800 && !apps[key].onMobile){
         return null;
      }

      return <AppIcon size='big'
      title={apps[key].name}
      action={() => { props.appsContext.open(apps[key].name); props.displayMenu() }}
      type={apps[key].icon}
      key={key} />
   });

   const filterApps = useCallback((filteredApps) => {
      setApps(filteredApps);
   }, []);

   if (props.showMenu) {
      menu = (
         <div className={classes.MainMenu} >
            <Search filter={filterApps}/>
            <div className={classes.Icons}>
               {iconsApps}
            </div>
         </div >
      );
   }

   return menu;
}

export default MainMenu;