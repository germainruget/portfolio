import React, { useState, useCallback } from 'react';
import AppType from '../../config/AppType';

// import { AppsContext } from '../../context/apps-context';

import classes from './MainMenu.module.scss';

import AppIcon from '../UI/AppIcon/AppIcon';
import Search from './Search/Search';

const MainMenu = props => {
   // console.log('RENDER MAIN MENU');

   let menu = null;
   // const appsContext = useContext(AppsContext);
   
   const [apps, setApps] = useState(AppType);
   // console.log(apps);
   const iconsApps = Object.keys(apps).map(key => {
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