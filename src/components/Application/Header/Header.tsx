import React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './Header.module.scss';

interface Props{
   name:string;
   reduce: () => void;
   close: () => void;
}

const Header: React.FC<Props> = ({name, reduce, close}) => {
   return (
      <div className={classes.Header}>
         <div className={['handle', classes.Handle].join(' ')} style={{ cursor: 'all-scroll' }}>
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