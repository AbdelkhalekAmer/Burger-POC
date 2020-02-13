import React, { Fragment } from 'react';
import toUpperFirstLetter from '../../../Helpers/StringFormatter';

const OrderSummery = (props) => {

    const ingredientSummery = Object.keys(props.ingredients)
        .map((key) =>
            <li key={ key }>
                <span>{ toUpperFirstLetter(key) }</span>: { props.ingredients[key] }
            </li>);

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientSummery }
            </ul>
            <p>continue to checkout?</p>
            <button onClick={ props.close }>
                Cancel
            </button>
            <button>
                Continue
            </button>
        </Fragment>
    );
};

export default OrderSummery;