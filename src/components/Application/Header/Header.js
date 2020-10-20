import React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './Header.module.scss';

const Header = props => {
   return ( 
      <div className={classes.Header}>
         {props.name}
         <div>
            <Icon style={{padding:'0 5px', cursor:'pointer'}} type='ReduceOne' theme="outline" size="20" onClick={props.reduce}/>
            <Icon style={{padding:'0 5px', cursor:'pointer'}} type='CloseOne' theme="outline" size="20" onClick={props.close}/>
         </div>
      </div>
    );
}
 
export default Header;