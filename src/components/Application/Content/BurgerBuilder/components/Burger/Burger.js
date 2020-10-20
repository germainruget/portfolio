import React from 'react';

import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    //     return [...Array(props.ingredients[igKey])].map((_, i) => {
    //         return <BurgerIngredient key={igKey + i} type={igKey} />
    //     })
    // }).reduce((arr, el) => {
    //     return arr.concat(el);
    // }, []);

    let transformedIngredients = [];
    if (props.ingredients.length > 0) {
        transformedIngredients = props.ingredients.map((ingredient, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} remove={() => props.removeIngredient(ingredient, index)} />
        });
    }

    return (
        <div className={classes.BurgerContainer}>
            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top' />
                {transformedIngredients.length > 0 ? transformedIngredients : <p>No ingredients</p>}
                <BurgerIngredient type='bread-bottom' />
            </div>
        </div>
    );
}

export default burger;