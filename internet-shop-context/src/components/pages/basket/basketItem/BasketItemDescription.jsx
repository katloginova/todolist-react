import React from "react";
import constants from "../../../helpers/constants";


function BasketItemDescription ( props ) {
    const { description, price } = props;

    return (
        <>
            <div className={ constants.basketPage.basketDescr }> { description } </div>
            <div className={ constants.basketPage.basketPrice }> { `$${ price }` } </div>
        </>
    );
}

export default BasketItemDescription;