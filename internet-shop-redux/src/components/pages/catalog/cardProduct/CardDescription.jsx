import React from "react";
import ButtonBasket from "../../../buttons/ButtonBasket";
import constants from "../../../helpers/constants";

function CardDescription ( { title, price, click } ) {
    return (
        <div className={ constants.catalogPage.cardDescr }>
            <div className={ constants.catalogPage.cardText }>
                <div className={ constants.catalogPage.cardTitle }>{ title }</div>
                <div className={ constants.catalogPage.cardPrice }>{ `$${ price }` }</div>
            </div>
            <ButtonBasket size={ 30 } click={ click } />
        </div>
    );
}

export default CardDescription;