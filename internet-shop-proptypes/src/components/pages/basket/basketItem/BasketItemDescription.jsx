import React from "react";
import PropTypes from 'prop-types';

function BasketItemDescription ( props ) {
    const { description, price } = props;

    return (
        <>
            <div className="basket__descr"> { description } </div>
            <div className="basket__price"> { `$${ price }` } </div>
        </>
    );
}

BasketItemDescription.propTypes = {
    description: PropTypes.string,
    price: PropTypes.number,
}

export default BasketItemDescription;