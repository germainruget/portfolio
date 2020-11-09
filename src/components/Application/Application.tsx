import React, { useContext, useState } from 'react';

import { Config, AppsContext } from '../../context/apps-context';

import { motion, useDragControls } from 'framer-motion';



import classes from './Application.module.scss';

import Header from './Header/Header';
import LogoAnimationLoader from '../UI/LogoAnimationLoader/LogoAnimationLoader';


interface Props {
   config: Config;
}

const Application = React.forwardRef<HTMLDivElement, Props>(({ config }, ref) => {

   const { onFront, close, reduce } = useContext(AppsContext);

   const [appLoad, setAppLoad] = useState(config.needLoader);

   let appWidth = config.width ? config.width : 'auto';
   let appHeight = config.height ? config.height : 'auto';
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

   function stopDrag(event: any) {
      console.log('stop');
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
         style={{ width: appWidth, height: appHeight, zIndex: zIndex }}
         onMouseDownCapture={() => onFront(config.name)}>
         <Header onPointerDown={startDrag} onPointerUp={stopDrag} name={config.name} close={() => close(config.name)} reduce={() => reduce(config.name)} />
         <div className={classes.AppContent} style={{ height: appHeight }}>
            {appLoad && <LogoAnimationLoader message="Game is loading..." />}
            {React.cloneElement(config.content, { loadApp: appLoadedHandler })}
         </div>

      </motion.div>
   );
});

export default React.memo(Application);