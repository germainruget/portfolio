import { motion } from 'framer-motion';
import React from 'react';
import Close from '../UI/Close/Close';

import classes from './Settings.module.scss';
import ThemeChanger, { ThemeColors } from './ThemeChanger/ThemeChanger';

interface Props {
   displaySettings:() => void;
}

const themes = [
   { bg: "#00adb5", window: "#222831", light: "#393e46", dark: "#222831" },
   { bg: "#1b262c", window: "#0f4c75", light: "#3282b8", dark: "#1b262c" },
   { bg: "#e84545", window: "#2b2e4a", light: "#903749", dark: "#2b2e4a" },
   { bg: "#f08a5d", window: "#b83b5e", light: "#6a2c70", dark: "#b83b5e" },
   { bg: "#f8b595", window: "#c06c84", light: "#f67280", dark: "#6c5b7c" },
]

const Settings: React.FC<Props> = ({ displaySettings }) => {

   const showMenu = {
      hidden: { x: -500 },
      show: { x: 0 }
   }

   const changeTheme = (colors:ThemeColors) => {
      document.documentElement.style.setProperty('--background', colors.bg);
      document.documentElement.style.setProperty('--window', colors.window);
      document.documentElement.style.setProperty('--window-light', colors.light);
      document.documentElement.style.setProperty('--window-dark', colors.dark);
   }

   return (
      <motion.div variants={showMenu} initial="hidden" animate="show" exit="hidden" className={classes.Settings}>
         <Close action={displaySettings} position="right" />
         <h2>Themes</h2>
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {themes.map(t => <ThemeChanger colors={t} changeTheme={changeTheme} />)}
         </div>
      </motion.div>
   );
}

export default React.memo(Settings);