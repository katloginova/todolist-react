import React from "react";
import './style.css';
import IconBasket from "../icons/IconBasket";
import constants from "../helpers/constants";

function ButtonBasket ( { size, click } ) {
    return (
        <button
            className={ constants.buttons.btnBasket }
            onClick={ click }
        >
            <IconBasket size={ size } />
        </button>
    );
}

export default ButtonBasket;