import React from 'react';

import classes from './FolderStructure.module.scss';

import Folder, { FolderProps } from './Folder/Folder';

export interface Props {
   structure: Array<FolderProps>;
   active: boolean;
   toggleStructure:() => void;
}

const FolderStructure: React.FC<Props> = ({ structure, active, toggleStructure }) => {


   const children = structure.map(key => {
      return <Folder icon={key.icon} title={key.title} childs={key.childs} to={key.to} key={key.title} toggleStructure={toggleStructure} />
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