import React, { useState } from "react";
import { Card  } from 'antd';
import IconBasket from "../../iconBasket/IconBasket";

function CardProduct ( props ) {
    const { id, titleCard, priceCard, imageCard } = props;
    return (
        <Card
            data-id={id}
            className={ 'card-product' }
            cover={ <img className={ 'card-img' }
                alt={ titleCard }
                src={ imageCard }
            /> } >
        
            <div className={ 'card' }>
                <div className={ 'card-descr' }>
                    <div className={ 'card-descr__title' } >{ titleCard }</div>
                    <div className={ 'card-descr__price' } >{ `${ priceCard } uah` }</div>
                </div>
            
                <IconBasket />
            </div>
        </Card>
  );
}

export default CardProduct;