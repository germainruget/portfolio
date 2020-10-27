import React from 'react';

import classes from './Modal.module.scss';

const Modal: React.FC = props => {
   return ( 
      <div className={classes.Modal}>
         {props.children}
      </div>
    );
}
 
export default Modal;