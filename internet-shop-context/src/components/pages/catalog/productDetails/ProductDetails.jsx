import { useEffect, useState, useContext } from "react";
import Context from "../../../../context";
import { useParams } from "react-router-dom";
import constants from "../../../helpers/constants";
import ImageDefault from "../../../imageDefault/ImageDefault";
import ProductDescription from "./ProductDescription";
import addProductToOrder from "../../../helpers/addProductToOrder";
import getData from "../../../helpers/getProductData";
import getCountTotal from "../../../helpers/getCountTotal";
import './style.css';

function ProductDetails () {
    const { productId } = useParams();
    const [ productData, setProductData ] = useState( {} );
    let { setCountProducts, setCountTotal, listOrderedProducts, setListOrderedProducts } = useContext( Context );

    useEffect( () => { getData( productId, setProductData ) }, [ productId ] );
    let { id = '', title = '', description = '', price = '', image = '' } = productData;

    function productClick () {
        listOrderedProducts = addProductToOrder( id, listOrderedProducts );
        const countTotal = getCountTotal( listOrderedProducts );

        setListOrderedProducts( listOrderedProducts );
        setCountProducts( listOrderedProducts.length );
        setCountTotal( countTotal );
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