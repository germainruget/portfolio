import React, { useState } from 'react';

import classes from './Folder.module.scss';

import Icon from '@icon-park/react/es/all';
import { NavLink } from 'react-router-dom';

import useWindowSize from '../../../../../../hooks/useWindowSize';

export interface FolderProps {
   icon?: any;
   title: string;
   childs?: Array<FolderProps>;
   to?: string;
   toggleStructure?: () => void;
}

const Folder: React.FC<FolderProps> = ({ icon, title, childs, to, toggleStructure }) => {

   const [open, setOpen] = useState(true);
   const [folderIcon, setFolderIcon] = useState('FolderOpen');
   const { width } = useWindowSize();

   const toggleMenuHandler = () => {
      setOpen(!open);
      if (!open) setFolderIcon('FolderOpen')
      else setFolderIcon('FolderClose')
   }

   const childrenLink = childs !== undefined && open ? childs.map(key => {
      return <Folder icon={key.icon} title={key.title} childs={key.childs} to={key.to} key={key.title} toggleStructure={toggleStructure} />
   }) : null;


   if (icon === undefined) icon = folderIcon;


   let currentLink = (
      <div className={classes.CurrentFolder} onClick={toggleMenuHandler}>
         <Icon type={icon} theme="outline" size={20} style={{ marginRight: '5px' }} />
         <span className={classes.Title}>{title}</span>
      </div>
   )

   if (to) {
      currentLink = (
         <NavLink activeClassName={classes.Active} to={to} onClick={(width && width < 1150) ? toggleStructure : undefined}>
            <Icon type={icon} theme="outline" size={20} style={{ marginRight: '5px' }} />
            <span className={classes.Title}>{title}</span>
         </NavLink>
      )
   }

   return (
      <div className={classes.Folder}>
         {currentLink}
         <div className={classes.SubFolders}>
            {childrenLink}
         </div>
      </div>
   );
}

export default Folder;