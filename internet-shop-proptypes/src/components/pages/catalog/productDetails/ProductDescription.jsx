import React from "react";
import PropTypes from 'prop-types';
import ButtonBasket from "../../../buttons/ButtonBasket";

function ProductDescription ( props ) {
    const { description, price, click } = props;

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

ProductDescription.propTypes = {
    description: PropTypes.string,
    price: PropTypes.number,
    click: PropTypes.func,
}

export default ProductDescription;