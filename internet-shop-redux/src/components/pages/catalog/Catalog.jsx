import React, { useEffect, useState } from "react";
import constants from "../../helpers/constants";
import CardProduct from "./cardProduct/CardProduct";
import './style.css';

function Catalog () {
    const [ listProducts, setListProducts ] = useState( [] );

    useEffect( () => {
        fetch( constants.urlProducts )
            .then( res => res.json() )
            .then( ( products ) => setListProducts( products ) )
    }, [] )

    return ( listProducts.length > 0 ) && (
        <div className={ constants.catalogPage.pageCatalog }>
            { listProducts.map( ( item ) =>
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