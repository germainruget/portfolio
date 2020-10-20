import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss';

const burgerIngredient = (props) => {

   let ingredient = null;

   switch (props.type) {
      case ('bread-bottom'):
         ingredient = <div className={classes.BreadBottom}></div>;
         break;
      case ('bread-top'):
         ingredient = (
            <div className={classes.BreadTop}>
               <div className={[classes.Seeds, classes.Seeds1].join(' ')}></div>
               <div className={[classes.Seeds, classes.Seeds2].join(' ')}></div>
               <div className={[classes.Seeds, classes.Seeds3].join(' ')}></div>
            </div>
         );
         break;
      case ('salad'):
         ingredient = <div onClick={props.remove} className={classes.Salad}></div>;
         break;
      case ('onions'):
         ingredient = <div onClick={props.remove} className={classes.Onions}></div>;
         break;
      case ('cheese'):
         ingredient = <div onClick={props.remove} className={classes.Cheese}></div>;
         break;
      case ('meat'):
         ingredient = <div onClick={props.remove} className={classes.Meat}></div>;
         break;
      case ('pickles'):
         ingredient = (
            <div onClick={props.remove} className={classes.Pickles}>
               <div className={classes.Pickle}></div>
               <div className={classes.Pickle}></div>
               <div className={classes.Pickle}></div>
            </div>
         );
         break;
      case ('ketchup'):
         ingredient = <div onClick={props.remove} className={classes.Ketchup}></div>;
         break;
      default:
         ingredient = null;
   }

   return ingredient;
}

burgerIngredient.propTypes = {
   type: PropTypes.string.isRequired
}

export default burgerIngredient;