import React from "react";
import PropTypes from 'prop-types';
import { FaShoppingBasket } from 'react-icons/fa';
import './style.css';

function IconBasket ( { size } ) {
    return (
        <div className="icon-basket" >
            <FaShoppingBasket
                className="fa-basket"
                size={ size }
            />
        </div>
    );
}

IconBasket.propTypes = {
    size: PropTypes.number,
}

export default IconBasket;