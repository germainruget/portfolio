import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import classes from './Explorer.module.scss';

import FolderStructure from './FolderStructure/FolderStructure';
import FolderContent from './FolderContent/FolderContent';


export interface Props {

}

const Explorer: React.FC<Props> = () => {

   const [folderStructureActive, setFolderStructureActive] = useState(true);

   const STRUCTURE = [
      {
         title: 'Web Projects', childs:
            [
               { icon: 'Notes', title: 'BSF', to: '/bsf' },
               { icon: 'Notes', title: 'Asterie', to: '/asterie' },
               { icon: 'Notes', title: 'Ancor', to: '/ancor' },
            ],
      }
      ,
      {
         title: 'CSS Projects', childs:
            [
               { icon: 'CodeBrackets', title: 'Future City', to: '/future-city' },
               { icon: 'CodeBrackets', title: 'Space Ship', to: '/space-ship' },
            ],
      }
   ]

   const toggleStructureHandler = () => {
      setFolderStructureActive(a => !a);
   }

   return (
      <div className={classes.Explorer}>
         <BrowserRouter>
            <FolderStructure structure={STRUCTURE} active={folderStructureActive} toggleStructure={toggleStructureHandler} />
            <FolderContent toggleStructure={toggleStructureHandler} active={folderStructureActive} />
         </BrowserRouter>
      </div>
   );
}

export default Explorer;