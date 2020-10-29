import React, { useState } from 'react';
import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

import { motion, useDragControls } from 'framer-motion';

import { Config } from '../../context/apps-context';


import classes from './Application.module.scss';

import Header from './Header/Header';
import LogoAnimationLoader from '../UI/LogoAnimationLoader/LogoAnimationLoader';


interface Props {
   config: Config;
   close: (appName: string) => void;
   reduce: (appName: string) => void;
   onFront: (appName: string) => void;
}

const Application = React.forwardRef<HTMLDivElement, Props>(({ config, close, reduce, onFront }, ref) => {

   useWhyDidYouUpdate('Application', { config, close, reduce, onFront })

   const [appLoad, setAppLoad] = useState(config.needLoader);

   let appWidth = config.width ? config.width : '200px';
   const zIndex = config.active ? 2 : 1;

   const appClasses = [classes.Application];
   if (config.reduce) appClasses.push(classes.Close);

   const appLoadedHandler = (appLoaded: boolean) => {
      setAppLoad(appLoaded);
   }

   const dragControls = useDragControls()

   function startDrag(event:any) {
      dragControls.start(event)
   }

   return (
      <motion.div
         drag
         dragConstraints={ref as React.RefObject<HTMLInputElement>}
         dragElastic={0.1}
         dragControls={dragControls}
         dragListener={false}
         dragMomentum={false}
         className={appClasses.join(' ')}
         style={{ width: appWidth, zIndex: zIndex }}
         onMouseDownCapture={() => onFront(config.name)}>
         <Header onPointerDown={startDrag} name={config.name} close={() => close(config.name)} reduce={() => reduce(config.name)} />
         <div className={classes.AppContent}>
            {appLoad && <LogoAnimationLoader message="Game is loading..." />}
            {React.cloneElement(config.content, { loadApp: appLoadedHandler })}
         </div>
      </motion.div>
   );
});

export default React.memo(Application);