import React from 'react';
import classes from './Button.module.scss';

interface Props {
   clicked: () => void;
   type: "classic" | "action"
}

const Button: React.FC<Props> = ({ clicked, children, type = "classic" }) => {

   let style = [classes.Button];
   if(type == "action")  style.push(classes.Action)
   return <button className={style.join(' ')} onClick={clicked}>{children}</button>;
}

export default Button;