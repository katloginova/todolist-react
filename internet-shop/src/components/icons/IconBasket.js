import React from "react";
import { FaShoppingBasket } from 'react-icons/fa';

import './style.css';

function IconBasket ( {size} ) {

    return (
        <div className={'icon-basket'} >
            <FaShoppingBasket className={'fa-basket'} size={ size } />
        </div>
  );
}

export default IconBasket;