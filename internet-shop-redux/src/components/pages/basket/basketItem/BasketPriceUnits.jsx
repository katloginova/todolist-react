import React from "react";
import constants from "../../../helpers/constants";

function BasketPriceUnits ( { countUnits, price } ) {
    return (
        <div className={ constants.basketPage.basketPriceUnits }>{ `$${ countUnits * price }` }</div>
    );
}

export default BasketPriceUnits;