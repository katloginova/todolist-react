import React from "react";
import IconBasket from "../../icons/IconBasket";

function CardProduct ( props ) {
    const { id, titleCard, priceCard, imageCard } = props;
    return (
        <div className={'card'} data-id={id}>
            <div className={'card__img'}>
                <img alt={titleCard} src={imageCard} />
            </div>

            <div className={'card__descr'}>
                <div className={'card__text'}>
                    <div className={'card__title'}>{ titleCard }</div>
                    <div className={'card__price'}>{ `$${ priceCard }` }</div>
                </div>
                <IconBasket size={ 30 } />
            </div>
        </div>
  );
}

export default CardProduct;