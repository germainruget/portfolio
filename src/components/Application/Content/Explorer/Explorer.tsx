import React, { useEffect, useRef, useState } from 'react';

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

   const explorerRef = useRef<HTMLDivElement >(null);

   const [elemSize, setElemSize] = useState(0);
   
   useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
         for(let entry of entries){
            setElemSize(entry.contentRect.width);
         }
      });
   
      if (explorerRef.current) {
         resizeObserver.observe(explorerRef.current);
      }

   }, []);

   return (
      <div ref={explorerRef} className={classes.Explorer} >
         <FolderStructure structure={STRUCTURE} active={folderStructureActive} toggleStructure={toggleStructureHandler} width={elemSize} />
         <FolderContent toggleStructure={toggleStructureHandler} active={folderStructureActive}  width={elemSize} />
      </div>
   );
}

export default Explorer;