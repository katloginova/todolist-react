import React, { useMemo, useState } from "react";
import {useParams} from "react-router-dom";
import constants from "../../../helpers/constants";
import IconBasket from "../../../icons/IconBasket";

import './style.css';

function ProductDetails ( {selectProduct} ) {
    const { productId } = useParams();
    const [ productData, setProductData ] = useState({});

    useMemo(() => {
        fetch(`${constants.urlProducts}${productId}`)
            .then(res => res.json())
            .then((data) => setProductData(data))
    }, [productId])
    let { id = '', title = '', description = '', price = '', image = '' } = productData;

    
    return (Object.keys(productData).length !== 0) && (
        <div className="product-details" data-id={id}>
            <div className={'product-details__title'}>{title}</div>
            <div className={ 'product-details__img' }>
                <img src={image} alt={'image'} />
            </div>

            <div className={ 'product-details__wrap' }>
                <div className={ 'product-details__descr' }>{ description }</div>
                
                <div className={'product-details__price'}>
                    <div className={ 'product-price' }>{ `$${price}` }</div>
                    <IconBasket size={35} click={ selectProduct }/>
                </div>
            </div>
        </div>
  );
}

export default ProductDetails;