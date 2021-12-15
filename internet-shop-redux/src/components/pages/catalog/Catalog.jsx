import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../../../api/products";
import constants from "../../helpers/constants";
import CardProduct from "./cardProduct/CardProduct";
import './style.css';

function Catalog () {
    const dispatch = useDispatch();
    let { products } = useSelector( ( state ) => state.fetchedProducts );

    useEffect( () => {
        dispatch( fetchProducts() );
    }, [] );

    return ( products.length > 0 ) && (
        <div className={ constants.catalogPage.pageCatalog }>
            { products.map( ( item ) =>
                <CardProduct
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    price={ item.price }
                    image={ item.image } />
            ) }
        </div>
    );
}

export default Catalog;