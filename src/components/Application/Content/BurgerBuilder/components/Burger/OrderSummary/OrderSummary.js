import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredientsCount).map((ingKey, index) => {
        if(props.ingredientsCount[ingKey] <= 0){
            return null;
        }
        return <li key={ingKey + index}><span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredientsCount[ingKey]}</li>
    })

    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients : </p>
            <ul>{ingredientsSummary}</ul>
            <p>Total price : {props.price.toFixed(2)} €</p>
            <Button btnType='Danger' click={props.cancel}>Cancel</Button>
            <Button btnType='Success' click={props.continue}>Continue</Button>
        </Fragment>
    )
};

export default orderSummary;