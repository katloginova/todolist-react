import React, { useEffect, useState } from "react";
import constants from "../../helpers/constants";
import CardProduct from "./CardProduct";
import './style.css';


function Catalog () {
    const [listProducts, setListProducts] = useState( [] );
    useEffect( () => {
        fetch( constants.urlProducts )
            .then( res => res.json() )
            // .then( ( data ) => setListProducts( data ) )
            .then( ( data ) => setListProducts( data ) )
            .then( () => console.log( listProducts[0] ) )
    }, [])


    return (
        <div className="catalog">
            { listProducts && listProducts.map( ( item ) =>
                <CardProduct
                    id={ item.id }
                    titleCard={ item.title }
                    priceCard={ item.price }
                    imageCard={ item.image }
                /> ) }
            
        </div>
    );
}

export default Catalog;