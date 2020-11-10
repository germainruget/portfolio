import React from 'react'

import classes from './ThemeChanger.module.scss';

export interface ThemeColors {
   bg: string;
   window: string;
   light: string;
   dark: string;
}

interface ThemeChangerProps {
   colors: ThemeColors;
   changeTheme: (colors: ThemeColors) => void;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ colors, changeTheme }) => {
   return (
      <div className={classes.ThemeChanger} onClick={() => changeTheme(colors)}>
         <div style={{ backgroundColor: colors.bg }}></div>
         <div style={{ backgroundColor: colors.window }}></div>
         <div style={{ backgroundColor: colors.light }}></div>
         <div style={{ backgroundColor: colors.dark }}></div>
      </div>
   );
}

export default ThemeChanger;