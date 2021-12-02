import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../../../helpers/constants";
import ImageDefault from "../../../imageDefault/ImageDefault";
import ProductDescription from "./ProductDescription";
import './style.css';

function ProductDetails ( { selectProductClick } ) {
    const { productId } = useParams();
    const [ productData, setProductData ] = useState( {} );

    useEffect( () => {
        fetch( `${ constants.urlProducts }${ productId }` )
            .then( res => res.json() )
            .then( ( data ) => setProductData( data ) )
    }, [ productId ] );

    let {
        id = '',
        title = '',
        description = '',
        price = '',
        image = ''
    } = productData;

    return ( Object.keys( productData ).length > 0 ) && (
        <div data-id={ id } className={ constants.productDetails.productDetails }>

            <div className={ constants.productDetails.prductTitle }>{ title }</div>

            <ImageDefault
                nameClass={ constants.productDetails.productImg }
                title={ title }
                image={ image }
            />
            <ProductDescription
                description={ description }
                price={ price }
                selectProductClick={ selectProductClick }
            />
        </div>
    );
}

export default ProductDetails;