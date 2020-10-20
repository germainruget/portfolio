import React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './AppIcon.module.scss';

const AppIcon = props => {

   let size = props.size ? props.size : 'classic';
   let title = null;
   let iconSize = '20';
   
   const iconClasses = [classes.AppIcon];

   if(size === 'big') {
      iconClasses.push(classes.Big);
      title = <span className={classes.Title}>{props.title}</span>
      iconSize = '40'
   }

   if(props.active){
      iconClasses.push(classes.Active);
   }else if(props.open !== undefined){
      iconClasses.push(classes.Open);
   }

   return ( 
      <div className={iconClasses.join(' ')} onClick={props.action}>
         <Icon type={props.type} theme="outline" size={iconSize} className={classes.Icon} />
         {title}
      </div>
    );
}
 
export default AppIcon;