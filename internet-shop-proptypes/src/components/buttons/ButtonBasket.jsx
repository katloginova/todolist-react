import React from "react";
import PropTypes from 'prop-types';
import IconBasket from "../icons/IconBasket";
import './style.css';

function ButtonBasket ( props ) {
    const { size, click } = props;

    return (
        <button
            className="btn_basket"
            onClick={ click }
        >
            <IconBasket size={ size } />
        </button>
    );
}

ButtonBasket.propTypes = {
    size: PropTypes.number,
    click: PropTypes.func,
}

export default ButtonBasket;