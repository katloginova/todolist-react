import React from "react";
import IconBasket from "../../icons/IconBasket";
import { Link, useLocation } from "react-router-dom";

function CardProduct ( props ) {
    const { id, titleCard, priceCard, imageCard, selectProduct } = props;
    let { pathname } = useLocation();

    return (
        <div className={ 'card' } data-id={ id }>
            <Link className={ 'card-link' } to={ `${ pathname }/${ id }` }>
                <div className={ 'card__img' }>
                    <img alt={ titleCard } src={ imageCard } />
                </div>
            </Link>


            <div className={ 'card__descr' }>
                <div className={ 'card__text' }>
                    <div className={ 'card__title' }>{ titleCard }</div>
                    <div className={ 'card__price' }>{ `$${ priceCard }` }</div>
                </div>
                <IconBasket size={ 30 } click={ selectProduct } />
            </div>
        </div>
    );
}

export default CardProduct;