import React, { Fragment, useState } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummery from '../../Components/Burger/OrderSummery/OrderSummery';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
};

const BurgerBuilder = () => {

    // State managment...
    const [ingredients, setIngredients] = useState(() => {
        return {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        };
    });
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    // Disable build controls info
    const disableInfo = ingredients.clone();
    for (var key in disableInfo) {
        disableInfo[key] = disableInfo[key] <= 0;
    }

    // Add and remove ingredient handlers.
    const addIngredientHandler = (type) => {
        changeIngredients(type, 1);
    };

    const removeIngredientHandler = (type) => {
        changeIngredients(type, -1);
    };

    const changeIngredients = (type, factor) => {
        const updatedCount = ingredients[type] + factor;
        if (updatedCount >= 0) {

            // Update changes through the factor...
            const updatedIngredients = ingredients.clone();
            updatedIngredients[type] = updatedCount;

            setIngredients(updatedIngredients);

            setTotalPrice((oldPrice) => oldPrice + (INGREDIENT_PRICES[type] * factor));

            // check if purchasable
            updatePurchaseState(updatedIngredients);
        }
    }

    // Check if being able to purchase the burger.
    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((sum, el) => sum + el, 0);
        setPurchasable(() => sum > 0);
    };

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const closeModalHandler = () => {
        setPurchasing(false);
    }

    const continueModalHandler = () => {
        alert('Purchase');
    };

    return (
        <Fragment>
            <Modal show={ purchasing }
                close={ closeModalHandler }>
                <OrderSummery ingredients={ ingredients }
                    totalPrice={ totalPrice }
                    close={ closeModalHandler }
                    continue={ continueModalHandler } />
            </Modal>
            <Burger ingredients={ ingredients } />
            <BuildControls
                add={ addIngredientHandler }
                remove={ removeIngredientHandler }
                disabled={ disableInfo }
                price={ totalPrice }
                purchasable={ purchasable }
                order={ purchaseHandler } />
        </Fragment>
    );
};

export default BurgerBuilder;