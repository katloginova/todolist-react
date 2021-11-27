import React from "react";
import constants from "../helpers/constants";
import { FaShoppingBasket } from 'react-icons/fa';
import './style.css';

function IconBasket ( { size, click } ) {

    return (
        <div
            className={ constants.icons.classes.iconBasket }
            onClick={ click }>
            <FaShoppingBasket
                className={ constants.icons.classes.faBasket }
                size={ size }
            />
        </div>
    );
}

export default IconBasket;