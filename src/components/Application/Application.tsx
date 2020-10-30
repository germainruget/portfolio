import React, { useContext, useState, useCallback } from 'react';

import { Config, AppsContext } from '../../context/apps-context';

import useWhyDidYouUpdate from '../../hooks/whyDidYouUpdate';

import { motion, useDragControls } from 'framer-motion';



import classes from './Application.module.scss';

import Header from './Header/Header';
import LogoAnimationLoader from '../UI/LogoAnimationLoader/LogoAnimationLoader';


interface Props {
   config: Config;
}

const Application = React.forwardRef<HTMLDivElement, Props>(({ config, /*close, reduce, onFront*/ }, ref) => {
   
    const { onFront, close, reduce } = useContext(AppsContext);
   
   useWhyDidYouUpdate('Application', { config, /*close, reduce, onFront*/ })

   const [appLoad, setAppLoad] = useState(config.needLoader);

   let appWidth = config.width ? config.width : 'auto';
   const zIndex = config.active ? 2 : 1;

   const appClasses = [classes.Application];
   if (config.reduce) appClasses.push(classes.Close);

   const appLoadedHandler = (appLoaded: boolean) => {
      setAppLoad(appLoaded);
   }

   const dragControls = useDragControls()

   function startDrag(event: any) {
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
         <div className={classes.AppContent} >
            {appLoad && <LogoAnimationLoader message="Game is loading..." />}
            {React.cloneElement(config.content, { loadApp: appLoadedHandler })}
         </div>

      </motion.div>
   );
});

export default React.memo(Application);