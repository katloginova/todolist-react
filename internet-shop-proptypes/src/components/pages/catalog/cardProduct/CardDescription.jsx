import React from "react";
import PropTypes from 'prop-types';
import ButtonBasket from "../../../buttons/ButtonBasket";

function CardDescription ( props ) {
    const { title, price, click } = props;
    return (
        <div className="card__descr">
            <div className="card__text">
                <div className="card__title">{ title }</div>
                <div className="card__price">{ `$${ price }` }</div>
            </div>
            <ButtonBasket size={ 30 } click={ click } />
        </div>
    );
}

CardDescription.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    click: PropTypes.func,
}

export default CardDescription;