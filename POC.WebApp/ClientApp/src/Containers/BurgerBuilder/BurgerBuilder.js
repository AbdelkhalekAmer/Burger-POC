import React, { Fragment, useState } from 'react';
import Burger from '../../Components/Burger/Burger';

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState(() => {
        return {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        };
    });

    return (
        <Fragment>
            <Burger ingredients={ingredients} />
            <div>Builder controls</div>
        </Fragment>
    );
};

export default BurgerBuilder;