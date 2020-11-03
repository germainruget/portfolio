import React from 'react';
import classes from './Backdrop.module.scss';


export interface Props {
    active: boolean;
    action?: () => void;
}

const Backdrop: React.FC<Props> = ({ active, action, children }) => {

    let backdrop = null;

    if (active) backdrop = <div className={classes.Backdrop} onClick={action}>{children}</div>;

    return backdrop;
}

export default Backdrop;