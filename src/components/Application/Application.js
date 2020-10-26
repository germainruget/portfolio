import React, { useState } from 'react';
import Draggable from 'react-draggable';

import classes from './Application.module.scss';

import Header from './Header/Header';
import LogoAnimationLoader from '../UI/LogoAnimationLoader/LogoAnimationLoader';

const Application = props => {
   console.log(props.config.needLoader);
   const [appLoad, setAppLoad] = useState(props.config.needLoader);

   let appWidth = props.config.width ? props.config.width : '200px';
   const zIndex = props.config.active ? 2 : 1;

   const appClasses = [classes.Application];
   if (props.config.reduce) appClasses.push(classes.Close);

   const appLoadedHandler = (appLoaded) => {
      setAppLoad(appLoaded);
   }
   
   return (
      <Draggable handle='.handle' bounds='parent'>
         <div className={appClasses.join(' ')} style={{ width: appWidth, zIndex: zIndex }} onMouseDownCapture={() => props.onFront(props.config.name)}>
            <div className='handle' style={{ cursor: 'all-scroll' }}>
               <Header name={props.config.name}
                  close={() => props.close(props.config.name)}
                  reduce={() => props.reduce(props.config.name)} />
            </div>
            <div className={classes.AppContent}>
               {appLoad && <LogoAnimationLoader message="Game is loading..." />}
               {React.cloneElement(props.config.content, {loadApp: appLoadedHandler})}
            </div>
         </div>
      </Draggable>
   );
}

export default Application;