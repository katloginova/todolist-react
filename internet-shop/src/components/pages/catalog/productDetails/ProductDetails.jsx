import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../../../helpers/constants";
import IconBasket from "../../../icons/IconBasket";
import './style.css';

function ProductDetails ( { selectProductClick } ) {
    const { productId } = useParams();
    const [ productData, setProductData ] = useState( {} );

    useMemo(() =>
    {
        fetch(`${ constants.urlProducts }${ productId }`)
            .then(res => res.json())
            .then((data) => setProductData(data))
    }, [ productId ]);

    let {
        id = '',
        title = '',
        description = '',
        price = '',
        image = ''
    } = productData;

    return ( Object.keys( productData ).length !== 0 ) && (
        <div
            className={ constants.productDetails.classes.productDetails }
            data-id={ id }
        >
            <div className={ constants.productDetails.classes.prductTitle }>{ title }</div>
            <div className={ constants.productDetails.classes.productImg }>
                <img
                    src={ image }
                    alt={ constants.productDetails.classes.prductTitle }
                />
            </div>

            <div className={ constants.productDetails.classes.productWrap }>
                <div className={ constants.productDetails.classes.productDescr }>
                    { description }
                </div>
                <div className={ constants.productDetails.classes.productPrice }>
                    <div className={ constants.productDetails.classes.productPriceContent }>
                        { `$${ price }` }
                    </div>
                    <IconBasket size={ 35 } click={ selectProductClick } />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;