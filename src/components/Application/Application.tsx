import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/windowSize';
import {Config} from '../../context/apps-context';

import Draggable, { ControlPosition } from 'react-draggable';

import classes from './Application.module.scss';

import Header from './Header/Header';
import LogoAnimationLoader from '../UI/LogoAnimationLoader/LogoAnimationLoader';

// config = {content: AppType[app].content, width: AppType[app].width, needLoader: AppType[app].needLoader, onMobile:AppType[app].onMobile};

interface Props{
   config: Config;
   close: (appName:string) => void;
   reduce: (appName:string) => void;
   onFront: (appName:string) => void;
}

const Application: React.FC<Props> = ({config, close, reduce, onFront}) => {
   
   const [appLoad, setAppLoad] = useState(config.needLoader);
   const [dragPosition, setDragPosition] = useState<ControlPosition | undefined | undefined>(undefined);

   let appWidth = config.width ? config.width : '200px';
   const zIndex = config.active ? 2 : 1;

   const appClasses = [classes.Application];
   if (config.reduce) appClasses.push(classes.Close);

   const appLoadedHandler = (appLoaded: boolean) => {
      setAppLoad(appLoaded);
   }

   
   const windowSize = useWindowSize(); 

   useEffect(() => {
      const resetDrag = () => {
         if(windowSize.width !== undefined && windowSize.width < 800) setDragPosition({x:0,y:0});
      }

      resetDrag();
   }, [windowSize]);

   const setDragAgain = () => {
      setDragPosition(undefined);
   }

   return (
      <Draggable handle='.handle' bounds='parent' position={dragPosition} onStart={setDragAgain}>
         <div className={appClasses.join(' ')} style={{ width: appWidth, zIndex: zIndex }} onMouseDownCapture={() => onFront(config.name)}>
            <Header name={config.name}
               close={() => close(config.name)}
               reduce={() => reduce(config.name)} />
            <div className={classes.AppContent}>
               {appLoad && <LogoAnimationLoader message="Game is loading..." />}
               {React.cloneElement(config.content, { loadApp: appLoadedHandler })}
            </div>
         </div>
      </Draggable>
   );
}

export default Application;