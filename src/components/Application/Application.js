import React from 'react';
import Draggable from 'react-draggable';

import classes from './Application.module.scss';

import Header from './Header/Header';

const Application = props => {

   let appWidth = props.config.width ? props.config.width : '200px';
   const zIndex = props.config.active ? 2 : 1;

   const appClasses = [classes.Application];
   if(props.config.reduce) appClasses.push(classes.Close);


   return (
      <Draggable handle='.handle' bounds='parent'>
         <div className={appClasses.join(' ')} style={{ width: appWidth, /*height: `${appHeight}px`,*/ zIndex: zIndex }} onMouseDownCapture={() => props.onFront(props.config.name)}>
            <div className='handle' style={{ cursor: 'all-scroll' }}>
               <Header name={props.config.name}
                       close={() => props.close(props.config.name)}
                       reduce={() => props.reduce(props.config.name)} />
            </div>
            {props.config.content}
         </div>
      </Draggable>
   );
}

export default Application;