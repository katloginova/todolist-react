import React from "react";

function BasketItemDescription ( props ) {
    const { description, price } = props;

    return (
        <>
            <div className="basket__descr"> { description } </div>
            <div className="basket__price"> { `$${ price }` } </div>
        </>
    );
}

export default BasketItemDescription;