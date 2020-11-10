import React, { useState, useCallback, useContext } from 'react';

import AppType, { Apps } from '../../config/AppType';
import { AppsContext } from '../../context/apps-context';

import classes from './MainMenu.module.scss';

import AppIcon from '../UI/AppIcon/AppIcon';
import Search from './Search/Search';
import { motion } from 'framer-motion';
import Close from '../UI/Close/Close';

interface Props {
   displayMenu: () => void;
}

const MainMenu: React.FC<Props> = ({ displayMenu }) => {

   const { open } = useContext(AppsContext);

   const [apps, setApps] = useState(AppType);

   const iconsApps = Object.keys(apps).map(key => {
      return <AppIcon size='big'
         title={apps[key].name}
         action={() => { open(apps[key].name); displayMenu() }}
         type={apps[key].icon}
         noMobile={!apps[key].onMobile}
         key={key}
         data-tour={apps[key].name}
         />
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
      <motion.div variants={showMenu} initial="hidden" animate="show" exit="hidden" className={classes.MainMenu} data-tour="main-menu" >
         <Close action={displayMenu} position="right" />
         <Search filter={filterApps} />
         <div className={classes.Icons}>
            {iconsApps}
         </div>
      </motion.div >
   );
}

export default React.memo(MainMenu);