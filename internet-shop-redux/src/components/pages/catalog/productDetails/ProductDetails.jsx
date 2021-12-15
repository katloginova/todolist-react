import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../../../helpers/constants";
import ImageDefault from "../../../imageDefault/ImageDefault";
import ProductDescription from "./ProductDescription";
import getProductData from "../../../helpers/getProductData";
import { useDispatch } from "react-redux";
import { addProduct, setCountProducts, setCountTotal } from "../../../../modules/listOrderedProducts/reducer";
import './style.css';

function ProductDetails () {
    const { productId } = useParams();
    const [ productData, setProductData ] = useState( {} );
    const dispatch = useDispatch();

    useEffect( () => { getProductData( productId, setProductData ) }, [ productId ] );
    let { id = '', title = '', description = '', price = '', image = '' } = productData;

    function productClick () {
        dispatch( addProduct( id ) );
        dispatch( setCountProducts() );
        dispatch( setCountTotal() );
    }


    return ( Object.keys( productData ).length > 0 ) && (
        <div data-id={ id } className={ constants.productDetails.productDetails }>

            <div className={ constants.productDetails.prductTitle }>{ title }</div>
            <ImageDefault
                nameClass={ constants.productDetails.productImg }
                title={ title }
                image={ image } />
            <ProductDescription
                description={ description }
                price={ price }
                click={ productClick } />
        </div>
    );
}

export default ProductDetails;