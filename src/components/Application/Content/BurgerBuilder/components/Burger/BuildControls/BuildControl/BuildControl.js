import React from 'react';

import classes from './BuildControl.module.scss';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.ButtonContainer}>
            <button onClick={props.remIng} disabled={props.disableInfo}>-</button>
            <button onClick={props.addIng} >+</button>
        </div>
    </div>
);

export default buildControl;