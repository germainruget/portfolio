import React, { useState, useCallback, useContext } from 'react';
import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

import useWindowSize from '../../hooks/useWindowSize';

import AppType, { Apps } from '../../config/AppType';
import { AppsContext } from '../../context/apps-context';

import classes from './MainMenu.module.scss';

import AppIcon from '../UI/AppIcon/AppIcon';
import Search from './Search/Search';

interface Props {
   displayMenu: () => void;
   showMenu: boolean;
   // open: (appName: string) => void;
}

const MainMenu: React.FC<Props> = ({ displayMenu, showMenu, /*open*/ }) => {
   useWhyDidYouUpdate('MainMenu', { displayMenu, showMenu, /*open*/ });

   const { open } = useContext(AppsContext);
   const windowSize = useWindowSize();
   let menu = null;

   const [apps, setApps] = useState(AppType);
   const iconsApps = Object.keys(apps).map(key => {

      if (windowSize.width !== undefined && windowSize.width < 800 && !apps[key].onMobile) {
         return null;
      }

      return <AppIcon size='big'
         title={apps[key].name}
         action={() => { open(apps[key].name); displayMenu() }}
         type={apps[key].icon}
         key={key} />
   });

   const filterApps = useCallback((filteredApps: Apps) => {
      setApps(filteredApps);
   }, []);

   if (showMenu) {
      menu = (
         <div className={classes.MainMenu} >
            <Search filter={filterApps} />
            <div className={classes.Icons}>
               {iconsApps}
            </div>
         </div >
      );
   }

   return menu;
}

export default React.memo(MainMenu);