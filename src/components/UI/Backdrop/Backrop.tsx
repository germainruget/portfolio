import * as React from 'react';
import classes from './Backdrop.module.scss';


export interface Props {
    active:boolean;
}

const Backdrop: React.FC<Props> = ({active}) => {

    let backdrop = null;

    if(active) backdrop = <div className={classes.Backdrop}></div>;
    
    return backdrop;
}

export default Backdrop;