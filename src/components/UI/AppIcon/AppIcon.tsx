import React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './AppIcon.module.scss';

interface Props{
   size?:string;
   title?:string;
   type:any;
   action: () => void;
   active?:boolean;
   open?:boolean;
}

const AppIcon:React.FC<Props> = ({size, active, open, action, title, type}) => {

   let defineSize = size ? size : 'classic';
   let defineTitle = null;
   let iconSize = '20';
   
   const iconClasses = [classes.AppIcon];

   if(defineSize === 'big') {
      iconClasses.push(classes.Big);
      defineTitle = <span className={classes.Title}>{title}</span>
      iconSize = '40'
   }

   if(active){
      iconClasses.push(classes.Active);
   }
   else if(open){
      iconClasses.push(classes.Open);
   }

   return ( 
      <div className={iconClasses.join(' ')} onClick={action}>
         <Icon type={type} theme="outline" size={iconSize} className={classes.Icon} />
         {defineTitle}
      </div>
    );
}
 
export default AppIcon;