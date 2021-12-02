import React from "react";
import { Link, useLocation } from "react-router-dom";
import constants from "../../../helpers/constants";
import ImageDefault from "../../../imageDefault/ImageDefault";
import CardDescription from "./CardDescription";
import './style.css';

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
        <div data-id={ id } className={ constants.catalogPage.card } >
            <Link
                to={ `${ pathname }/${ id }` }
                className={ constants.catalogPage.cardlink }
            >
                <ImageDefault
                    nameClass={ constants.catalogPage.cardImg }
                    title={ titleCard }
                    image={ imageCard }
                />
            </Link>
            <CardDescription
                titleCard={ titleCard }
                priceCard={ priceCard }
                selectProductClick={ selectProductClick }
            />
        </div>
    );
}

export default CardProduct;