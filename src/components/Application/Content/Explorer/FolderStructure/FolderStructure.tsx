import React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './FolderStructure.module.scss';

import Folder, { FolderProps } from './Folder/Folder';

export interface Props {
   structure: Array<FolderProps>;
   active: boolean;
   toggleStructure: () => void;
   width: number;
}

const FolderStructure: React.FC<Props> = ({ structure, active, toggleStructure, width }) => {


   let icon: any = 'MenuUnfold';
   if (active) icon = 'MenuFold';

   const children = structure.map(key => {
      return <Folder icon={key.icon} title={key.title} childs={key.childs} to={key.to} key={key.title} toggleStructure={toggleStructure} />
   });

   const style = [classes.FolderStructure];
   if (!active) style.push(classes.Close);

   return (
      <div className={style.join(' ')} style={width && width > 1150 ? { position: 'relative' } : undefined}>
         <div style={{ flex: '1 1 auto' }}>
            {children}
         </div>
         <div style={{ textAlign: 'right', flex: '0 0 30px', cursor:'pointer' }} onClick={toggleStructure}>
            <Icon type={icon} theme="outline" size={20} style={{color:'#fff'}} />
         </div>
      </div>
   );
}

export default FolderStructure;