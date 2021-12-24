import React from "react";
import PropTypes from 'prop-types';

function BasketPriceUnits ( props ) {
    const { countUnits, price } = props;

    return (
        <div className="basket__price-units">{ `$${ countUnits * price }` }</div>
    );
}

BasketPriceUnits.propTypes = {
    countUnits: PropTypes.number,
    price: PropTypes.number,
}

export default BasketPriceUnits;