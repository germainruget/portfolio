import React from 'react';
import { motion } from "framer-motion";

import Icon from '@icon-park/react/es/all';

import classes from './AppIcon.module.scss';
import global from '../../../global/style/Global.module.scss'

interface Props {
   size?: 'classic' | 'big' | undefined;
   title?: string;
   type: any;
   action: () => void;
   active?: boolean;
   open?: boolean;
   noMobile?:boolean;
}

const AppIcon: React.FC<Props> = ({ size, active, open, action, title, type, noMobile = false }) => {

   let defineSize = size ? size : 'classic';
   let defineTitle = <span className={classes.Title}></span>;
   let iconSize = '20';

   const iconClasses = [classes.AppIcon];

   if (defineSize === 'big') {
      iconClasses.push(classes.Big);
      defineTitle = <span className={classes.Title}>{title}</span>
      iconSize = '40'
   }

   if (active) {
      iconClasses.push(classes.Active);
   }
   else if (open) {
      iconClasses.push(classes.Open);
   }

   if(noMobile) {
      iconClasses.push(global.DesktopOnly);
   }

   return (
      <motion.div layout transition={{ ease: "easeOut", duration: .2 }} className={iconClasses.join(' ')} onClick={action}>
         <Icon type={type} theme="outline" size={iconSize} className={classes.Icon} />
         {defineTitle}
      </motion.div>
   );
}

export default AppIcon;