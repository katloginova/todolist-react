import React, { useEffect, useState } from "react";
import constants from "../../helpers/constants";
import CardProduct from "./cardProduct/CardProduct";
import './style.css';

function Catalog ( { selectProductClick } ) {
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