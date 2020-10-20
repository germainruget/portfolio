import React, {useState} from 'react';
import classes from './Calculator.module.scss';

import Button from '../../../UI/Button/Button';

const Calculator = () => {

   const [calcul, setCalcul] = useState([]);

   const buttons = [];
   for(let i = 0; i <= 9; i++){
      buttons.push(<Button clicked={() => displayCalcul(i)} key={i}>{i}</Button>);
   }

   const displayCalcul = (entry) => {
      
      const newCalcul = [...calcul];

      if(newCalcul.length <= 0 && typeof entry === 'string') return;
      let nbChar = 0;
      for(let step in newCalcul){
         nbChar += newCalcul[step].toString().length;
      }

      if(nbChar > 12) return

      const lastItem = newCalcul[newCalcul.length - 1];
      if(typeof lastItem === 'number' && typeof entry === 'number'){ 
         newCalcul[newCalcul.lastIndexOf(lastItem)] = Number(lastItem + '' + entry);
      }
      else{ 
         newCalcul.push(entry);
      }

      setCalcul(newCalcul);
   }

   const makeCalcul = () => {
      let result = 0;

      for(let step in calcul){
         // eslint-disable-next-line
         if(step == 0) result = calcul[step];
         if(calcul[step - 1] === '+') result += calcul[step];
         if(calcul[step - 1] === '*') result *= calcul[step];
         if(calcul[step - 1] === '-') result -= calcul[step];
      }

      setCalcul([result]);
   }

   return ( 
      <div className={classes.Calculator}>
         <div className={classes.Screen}>{calcul}</div>
         <div className={classes.ButtonsContainer}>
            <div className={classes.ButtonsNumber}>
               {buttons.reverse()}
            </div>
            <div className={classes.ButtonsActions}>
               <Button clicked={() => setCalcul([])}>C</Button>
               <Button clicked={() => displayCalcul('*')}>x</Button>
               <Button clicked={() => displayCalcul('+')}>+</Button>
               <Button clicked={() => displayCalcul('-')}>-</Button>
               <Button clicked={makeCalcul}>=</Button>
            </div>
         </div>
      </div>
    );
}
 
export default Calculator;