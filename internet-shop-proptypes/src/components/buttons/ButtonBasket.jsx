import React from "react";
import './style.css';
import IconBasket from "../icons/IconBasket";

function ButtonBasket ( { size, click } ) {
    return (
        <button
            className="btn_basket"
            onClick={ click }
        >
            <IconBasket size={ size } />
        </button>
    );
}

export default ButtonBasket;