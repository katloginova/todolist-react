import React from "react";
import './style.css';
import BasketItem from "./BasketItem";
import constants from "../../helpers/constants";


function Basket ( props ) {
    const { listProducts, changeCountInput, deleteItemClick } = props;

    return ( listProducts.length !== 0 ) && (
        <div className={ constants.basketPage.pageBasket }>
            { listProducts.map( ( item ) =>
                <BasketItem
                    product={ item }
                    changeCountInput={ changeCountInput }
                    deleteItemClick={ deleteItemClick }
                />
            ) }
        </div>
    );
}

export default Basket;