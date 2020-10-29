import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";

import classes from './MobileNavigationContent.module.scss';
import AppIcon from '../../UI/AppIcon/AppIcon';

export interface Props {
   content: Array<AppInfo>;
   width: number;
   changeActive: (index?: number) => void;
}

export interface AppInfo {
   order: number;
   title: string;
   type: string;
   active: boolean;
   action: () => void;
}

const MobileNavigationContent: React.FC<Props> = ({ content, width, changeActive }) => {

   let navContent: JSX.Element[] = [];
   let activeIndex = 0;
   //Loop in the content, apps opened received from MobileNvigation
   for (let i in content) {
      //If we find an app
      if (content[i] !== undefined) {
         //If it's the active one, the action open the app
         if (content[i].active) {
            navContent.push(<AppIcon size='big' title={content[i].title} type={content[i].type} action={content[i].action} key={i} />);
         }
         //If not the action place the clicked one as the active one
         else {
            navContent.push(<AppIcon size='classic' title={content[i].title} type={content[i].type} action={() => {changeActive(+i);}} key={i} />);
         }
      }

      //Set the activeindex as the active one. It's used to set the element in the center
      if (content[i].active) activeIndex = +i;
   }

   let mobileNavigationContent = <div className={classes.NoAppOpen}>No applications open</div>;
   if (content.length >= 1) {
      mobileNavigationContent = (
         <AnimateSharedLayout>
            <motion.div layout className={classes.MobileNavigationContent} style={{ width: width, marginLeft: -((60 * activeIndex) + 75) }}>
               {navContent}
            </motion.div>
         </AnimateSharedLayout>
      )
   }

   return mobileNavigationContent;
}

export default MobileNavigationContent;