import React, { useContext } from 'react'
import { useHover } from 'react-use-gesture';
import { AppsContext } from '../../../../context/apps-context';

import classes from './OpenApp.module.scss';

interface OpenAppProps {
   appName: string;
}

const OpenApp: React.FC<OpenAppProps> = ({ appName, children }) => {

   const { open } = useContext(AppsContext);

   return (
      <span className={classes.OpenApp} onClick={() => open(appName)}>{children}</span>
   );
}

export default OpenApp;