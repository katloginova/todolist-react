import React from "react";
import constants from "../../helpers/constants";
import './style.css';

function BasketItemImg ( props ) {
    const { title, image } = props;

    return (
        <div className={ constants.basketPage.basketImg }>
            <div className={ constants.basketPage.imgTitle }>
                { title }
            </div>
            <img src={ image } alt={ title } />
        </div>
    );
}

export default BasketItemImg;