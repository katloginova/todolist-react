import React from "react";
import IconBasket from "../../icons/IconBasket";
import { Link, useLocation } from "react-router-dom";
import constants from "../../helpers/constants";

function CardProduct ( props ) {
    const {
        id,
        titleCard,
        priceCard,
        imageCard,
        selectProductClick
    } = props;
    let { pathname } = useLocation();

    return (
        <div
            className={ constants.catalogPage.card }
            data-id={ id }
        >
            <Link
                className={ constants.catalogPage.cardlink }
                to={ `${ pathname }/${ id }` }
            >
                <div className={ constants.catalogPage.cardImg }>
                    <img alt={ titleCard } src={ imageCard } />
                </div>
            </Link>

            <div className={ constants.catalogPage.cardDescr }>
                <div className={ constants.catalogPage.cardText }>
                    <div className={ constants.catalogPage.cardTitle }>{ titleCard }</div>
                    <div className={ constants.catalogPage.cardPrice }>{ `$${ priceCard }` }</div>
                </div>
                <IconBasket size={ 30 } click={ selectProductClick } />
            </div>
        </div>
    );
}

export default CardProduct;