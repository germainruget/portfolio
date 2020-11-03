import React from 'react';

import classes from './FolderStructure.module.scss';

import Folder, { FolderProps } from './Folder/Folder';

export interface Props {
   structure: Array<FolderProps>;
   active: boolean;
}

const FolderStructure: React.FC<Props> = ({ structure, active }) => {


   const children = structure.map(key => {
      return <Folder icon={key.icon} title={key.title} childs={key.childs} action={key.action} key={key.title} />
   });

   const style = [classes.FolderStructure];
   if (!active) style.push(classes.Close);
   return (
      <div className={style.join(' ')}>
         <div className={classes.Fixed}>
            {children}
         </div>
      </div>
   );
}

export default FolderStructure;