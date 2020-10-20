import React from 'react';

import classes from './BuildControls.module.scss';

import BuildControl from './BuildControl/BuildControl';
import Button from '../../UI/Button/Button';


const controls = [
   { label: 'Salad', type: 'salad' },
   { label: 'Meat', type: 'meat' },
   { label: 'Cheese', type: 'cheese' },
   { label: 'Onions', type: 'onions' },
   { label: 'Pickles', type: 'pickles' },
   { label: 'Ketchup', type: 'ketchup' },
];

const buildControls = (props) => (
   <div className={classes.BuildControls}>
      <p>Current price: {props.price.toFixed(2)} €</p>
      { controls.map(control => {
         return <BuildControl
            addIng={() => props.ingredientAdded(control.type)}
            remIng={() => props.ingredientRemoved(control.type)}
            key={control.label}
            label={control.label}
            disableInfo={props.disableInfo[control.type]} />
      })}
      <Button btnType='Success' disabled={!props.purchasable} click={props.purchasing}>Order Now</Button>
   </div>
)

export default buildControls;