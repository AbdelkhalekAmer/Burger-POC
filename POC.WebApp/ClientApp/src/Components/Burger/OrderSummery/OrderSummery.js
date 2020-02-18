import React, { Fragment } from 'react';
import toUpperFirstLetter from '../../../Helpers/StringFormatter';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: { props.totalPrice.toFixed(2) }</strong></p>
            <p>continue to checkout?</p>
            <Button
                clicked={ props.close }
                btnType='Danger'>
                CANCEL
            </Button>
            <Button
                clicked={ props.continue }
                btnType='Success'>
                CONTINUE
            </Button>
        </Fragment>
    );
};

export default OrderSummery;