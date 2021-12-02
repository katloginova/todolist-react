import React from "react";
import ButtonBasket from "../../../buttons/ButtonBasket";
import constants from "../../../helpers/constants";

function ProductDescription ( { description, price, selectProductClick } ) {
    return (
        <div className={ constants.productDetails.productWrap }>
            <div className={ constants.productDetails.productDescr }>
                { description }
            </div>
            <div className={ constants.productDetails.productPrice }>
                <div className={ constants.productDetails.productPriceContent }>
                    { `$${ price }` }
                </div>
                <ButtonBasket size={ 35 } click={ selectProductClick } />
            </div>
        </div>
    );
}

export default ProductDescription;