import React, { useEffect, useState } from "react";
import constants from "../../helpers/constants";
import CardProduct from "./CardProduct";
import './style.css';

function Catalog ( { selectProductClick } ) {
    const [ listProducts, setListProducts ] = useState([]);
    
    useEffect( () => {
        fetch( constants.urlProducts )
            .then( res => res.json() )
            .then( ( products ) => setListProducts( products ) )
    }, [] )

    return ( listProducts.length !== 0 ) && (
        <div className={constants.catalogPage.classes.pageCatalog}>
            { listProducts.map( ( item ) =>
                <CardProduct
                    id={ item.id }
                    titleCard={ item.title }
                    priceCard={ item.price }
                    imageCard={ item.image }
                    selectProductClick={ selectProductClick }
                />
            ) }
        </div>
    );
}

export default Catalog;