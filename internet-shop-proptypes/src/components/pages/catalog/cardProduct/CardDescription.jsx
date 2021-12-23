import React from "react";
import ButtonBasket from "../../../buttons/ButtonBasket";

function CardDescription ( { title, price, click } ) {
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

export default CardDescription;