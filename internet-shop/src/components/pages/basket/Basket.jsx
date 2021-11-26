import React from "react";
import './style.css';
import BasketItem from "./BasketItem";


function Basket ( props ) {
    const { listProducts, sumProduct, changeCountInput, deleteItemClick } = props;

    return ( listProducts.length !== 0 ) && (
        <div className="basket">

            { listProducts.map( ( item ) =>
                <BasketItem
                    product={ item }
                    sumProduct={ sumProduct }
                    changeCountInput={ changeCountInput }
                    deleteItemClick={ deleteItemClick }
                />
            ) }
        </div>
    );
}

export default Basket;