import React from 'react';
import classes from './Backdrop.module.scss';


export interface Props {
    active: boolean;
    action?: () => void;
    style?:{};
    className?:string;
}

const Backdrop: React.FC<Props> = ({ active, action, children, style, className }) => {

    let backdrop = null;

    let allClass = [classes.Backdrop];
    if(className) allClass.push(className);

    if (active) backdrop = <div className={allClass.join(' ')} onClick={action} style={{...style}} >{children}</div>;

    return backdrop;
}

export default Backdrop;