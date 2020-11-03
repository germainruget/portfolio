import React, { useState } from 'react';

import classes from './Folder.module.scss';

import Icon from '@icon-park/react/es/all';

export interface FolderProps {
    icon?: any;
    title: string;
    childs?: Array<FolderProps>;
    action?:() => void;
}

const Folder: React.FC<FolderProps> = ({ icon, title, childs, action }) => {
    const [open, setOpen] = useState(true);
    const [folderIcon, setFolderIcon] = useState('FolderOpen');
    
    const children = childs !== undefined && open ? childs.map(key => {
        return <Folder icon={key.icon} title={key.title} childs={key.childs} action={key.action} key={key.title} />
    }) : null;

    const toggleMenuHandler = () => {
        setOpen(!open);
        if(!open) setFolderIcon('FolderOpen')
        else setFolderIcon('FolderClose')
    }
    
    if(icon === undefined) icon = folderIcon;

    return (
        <div className={classes.Folder}>
            <div className={classes.CurrentFolder} onClick={action ? action : toggleMenuHandler }>
                <Icon type={icon} theme="outline" size={20} style={{ marginRight: '5px' }} />
                <span className={classes.Title}>{title}</span>
            </div>
            <div className={classes.SubFolders}>
                {children}
            </div>
        </div>
    );
}

export default Folder;