import { motion } from 'framer-motion';
import React from 'react';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';

import classes from './Settings.module.scss';

import Wallpapers from './Wallpapers/Wallpapers';

interface Props {
   setBg: (bg: any) => void;
}

const Settings: React.FC<Props> = ({ setBg }) => {
   useWhyDidYouUpdate('Settings', { setBg })

   const showMenu = {
      hidden: { x: -500 },
      show: { x: 0 }
   }

   return (
      <motion.div variants={showMenu} initial="hidden" animate="show" exit="hidden" className={classes.Settings}>
         <h2>Settings</h2>
         <hr />
         <h3>Wallpaper</h3>
         <Wallpapers setBg={setBg} />
      </motion.div>
   );
}

export default React.memo(Settings);