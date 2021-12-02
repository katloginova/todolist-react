import React from "react";
import ButtonBasket from "../../../buttons/ButtonBasket";
import constants from "../../../helpers/constants";

function CardDescription ( { titleCard, priceCard, selectProductClick } ) {
    return (
        <div className={ constants.catalogPage.cardDescr }>
            <div className={ constants.catalogPage.cardText }>
                <div className={ constants.catalogPage.cardTitle }>{ titleCard }</div>
                <div className={ constants.catalogPage.cardPrice }>{ `$${ priceCard }` }</div>
            </div>
            <ButtonBasket size={ 30 } click={ selectProductClick } />
        </div>
    );
}

export default CardDescription;