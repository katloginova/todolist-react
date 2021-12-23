import React from "react";

function BasketPriceUnits ( { countUnits, price } ) {
    return (
        <div className="basket__price-units">{ `$${ countUnits * price }` }</div>
    );
}

export default BasketPriceUnits;