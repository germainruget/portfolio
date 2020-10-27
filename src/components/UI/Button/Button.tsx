import React from 'react';
import classes from './Button.module.scss';

interface Props {
   clicked: () => void;
}

const Button: React.FC<Props> = ({ clicked, children }) => {
   return <button className={classes.Button} onClick={clicked}>{children}</button>;
}

export default Button;