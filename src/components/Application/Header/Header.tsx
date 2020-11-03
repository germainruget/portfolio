import React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './Header.module.scss';

interface Props{
   name:string;
   reduce: () => void;
   close: () => void;
   onPointerDown: (event:any) => void;
   onPointerUp: (event:any) => void;
}

const Header: React.FC<Props> = ({name, reduce, close, onPointerDown, onPointerUp}) => {
   return (
      <div className={classes.Header}>
         <div onPointerDown={(event) => onPointerDown(event)} onPointerUp={(event) => onPointerUp(event)} className={classes.Handle} style={{ cursor: 'all-scroll' }}>
            {name}
         </div>
         <div>
            <Icon style={{ padding: '0 5px', cursor: 'pointer' }} type='ReduceOne' theme="outline" size="20" onClick={reduce} />
            <Icon style={{ padding: '0 5px', cursor: 'pointer' }} type='CloseOne' theme="outline" size="20" onClick={close} />
         </div>
      </div>
   );
}

export default Header;