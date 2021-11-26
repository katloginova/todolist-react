import React, { useEffect, useState } from "react";
import constants from "../../helpers/constants";
import CardProduct from "./CardProduct";
import './style.css';


function Catalog ( { selectProduct } ) {
    const [ listProducts, setListProducts ] = useState( [] );
    useEffect( () => {
        fetch( constants.urlProducts )
            .then( res => res.json() )
            .then( ( data ) => setListProducts( data ) )
    }, [] )

    return ( listProducts.length !== 0 ) && (
        <div className="catalog">
            { listProducts.map( ( item ) =>
                <CardProduct
                    id={ item.id }
                    titleCard={ item.title }
                    priceCard={ item.price }
                    imageCard={ item.image }
                    selectProduct={ selectProduct }
                />
            ) }
        </div>
    );
}

export default Catalog;