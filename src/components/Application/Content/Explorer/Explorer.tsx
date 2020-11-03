import React, { useState } from 'react';

import classes from './Explorer.module.scss';

import FolderStructure from './FolderStructure/FolderStructure';
import FolderContent from './FolderContent/FolderContent';
import ProjectDisplay from './ProjectDisplay/ProjectDisplay';
import { DATA } from './ProjectDisplay/DATA';
import useWindowSize from '../../../../hooks/useWindowSize';

export interface Props {

}

const Explorer: React.FC<Props> = () => {

   const { width } = useWindowSize();
   const mobile = width && width < 800;


   const [folderContent, setFolderContent] = useState<JSX.Element>();
   const [folderStructureActive, setFolderStructureActive] = useState(true);

   const [Ancor, Asterie, BSF] = Object.keys(DATA).map(key => {
      return <ProjectDisplay title={DATA[key].title} content={DATA[key].content} screenshots={DATA[key].screenshots} />
   });

   const STRUCTURE = [
      {
         title: 'Projects', childs:
            [
               { icon: 'Notes', title: 'BSF', action: () => {displayContentHandler(BSF);} },
               { icon: 'Notes', title: 'Asterie', action: () => {displayContentHandler(Asterie);}},
               { icon: 'Notes', title: 'Ancor', action: () => {displayContentHandler(Ancor);} },
            ],
      }
      ,
      { title: 'Folder 2' },
      { title: 'Folder 3' }
   ]

   const displayContentHandler = (content: JSX.Element) => {
      setFolderContent(content);
      if(mobile) toggleStructureHandler();
   }

   const toggleStructureHandler = () => {
      setFolderStructureActive(a => !a);
   }

   return (
      <div className={classes.Explorer}>
         <FolderStructure structure={STRUCTURE} active={folderStructureActive} />
         <FolderContent content={folderContent} toggleStructure={toggleStructureHandler} width={width} active={folderStructureActive} />
      </div>
   );
}

export default Explorer;