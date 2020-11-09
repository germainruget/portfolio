import React, { useContext, useState, useEffect } from 'react';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';

import AppType from '../../config/AppType';
import { AppsContext } from '../../context/apps-context';

import classes from './MobileNavigation.module.scss';

import Backdrop from '../UI/Backdrop/Backrop';
import MobileNavigationContent, { AppInfo } from './MobileNavigationContent/MobileNavigationContent';
import { motion } from 'framer-motion';

export interface Props {
   displayMobileMenu: () => void;
}

const MobileNavigaton: React.FC<Props> = ({ displayMobileMenu }) => {
   useWhyDidYouUpdate('MobileNavigaton', { displayMobileMenu });

   const appsContext = useContext(AppsContext);
   const [appsOpened, setAppsOpened] = useState<Array<AppInfo>>([]);

   //Initialize open Apps
   useEffect(() => {
      const openedApp: Array<AppInfo> = [];

      Object.keys(AppType).forEach((key, index) => {
         const app = appsContext.config(AppType[key].name);
         let appOpen: boolean | undefined = false;

         if (app !== null) {
            appOpen = !!app.open;
         }

         if (appOpen) {
            openedApp.push({
               order: index,
               active: false,
               title: AppType[key].name,
               type: AppType[key].icon,
               action: () => { appsContext.open(AppType[key].name, true); displayMobileMenu(); },
            });
         }
      });

      //Force at least one element to be active
      if (openedApp.length > 0) {
         openedApp[0].active = true;
      }

      const changeOpenApp = () => {
         setAppsOpened(openedApp);
      }

      changeOpenApp();

   }, [appsContext, displayMobileMenu]);

   const changeActive = (index?: number) => {
      const newAppsOpened = [...appsOpened];
      console.log(index);
      for (let i in newAppsOpened) {
         newAppsOpened[i].active = false;
      }
      if (index !== undefined) {
         newAppsOpened[index].active = true;
      }
      setAppsOpened(newAppsOpened);
   }

   const showMenu = {
      hidden: {
         y: '100vw',
         scale: 0,
         transition: {
            duration: .2
         }
      },
      show: {
         y: 0,
         scale: 1,
         transition: {
            duration: .2
         }
      }
   }

   return (
      <motion.div variants={showMenu} initial="hidden" animate="show" exit="hidden" className={classes.MobileNavigation}>
         <Backdrop active={true} />
         <MobileNavigationContent content={appsOpened} width={((appsOpened.length) * 60 + 90)} changeActive={changeActive} />
      </motion.div>
   );
}

export default React.memo(MobileNavigaton);