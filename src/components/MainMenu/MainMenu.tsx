import React, { useState, useCallback, useContext } from 'react';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';

import AppType, { Apps } from '../../config/AppType';
import { AppsContext } from '../../context/apps-context';

import classes from './MainMenu.module.scss';

import AppIcon from '../UI/AppIcon/AppIcon';
import Search from './Search/Search';
import { motion } from 'framer-motion';

interface Props {
   displayMenu: () => void;
}

const MainMenu: React.FC<Props> = ({ displayMenu }) => {
   useWhyDidYouUpdate('MainMenu', { displayMenu });

   const { open } = useContext(AppsContext);

   const [apps, setApps] = useState(AppType);

   const iconsApps = Object.keys(apps).map(key => {
      return <AppIcon size='big'
         title={apps[key].name}
         action={() => { open(apps[key].name); displayMenu() }}
         type={apps[key].icon}
         noMobile={!apps[key].onMobile}
         key={key} />
   });

   const filterApps = useCallback((filteredApps: Apps) => {
      setApps(filteredApps);
   }, []);

   const showMenu = {
      hidden: {
         y: '100vw',
         scale: 0,
         transition:{
            duration:.2
         }
      },
      show: {
         y: 0, 
         scale: 1,
         transition:{
            duration:.2
         }
      }
   }

   return (
      <motion.div variants={showMenu} initial="hidden" animate="show" exit="hidden" className={classes.MainMenu} >
         <Search filter={filterApps} />
         <div className={classes.Icons}>
            {iconsApps}
         </div>
      </motion.div >
   );
}

export default React.memo(MainMenu);