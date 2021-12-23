import React from "react";
import ButtonBasket from "../../../buttons/ButtonBasket";

function ProductDescription ( { description, price, click } ) {
    return (
        <div className="product-details__wrap">
            <div className="product-details__descr">
                { description }
            </div>
            <div className="product-details__price">
                <div className="product-price">
                    { `$${ price }` }
                </div>
                <ButtonBasket size={ 35 } click={ click } />
            </div>
        </div>
    );
}

export default ProductDescription;