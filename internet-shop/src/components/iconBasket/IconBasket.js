import React from "react";
import { FaShoppingBasket } from 'react-icons/fa';

import './style.css';

function IconBasket ( ) {
    const sizeBasket = 30;

    return (
        <div className={'icon-basket'} >
            <FaShoppingBasket className={'fa-basket'} size={ sizeBasket } />
        </div>
  );
}

export default IconBasket;