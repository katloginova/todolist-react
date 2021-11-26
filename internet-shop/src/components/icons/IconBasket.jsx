import React from "react";
import { FaShoppingBasket } from 'react-icons/fa';

import './style.css';

function IconBasket ( { size, click } ) {

    return (
        <div className={ 'icon-basket' } onClick={ click }>
            <FaShoppingBasket className={ 'fa-basket' } size={ size } />
        </div>
    );
}

export default IconBasket;