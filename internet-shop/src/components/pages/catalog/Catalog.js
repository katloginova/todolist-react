import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import constants from "../../helpers/constants";
import CardProduct from "./CardProduct";
import './style.css';


function Catalog () {
    const [listProducts, setListProducts] = useState( [] );
    useEffect( () => {
        fetch( constants.urlProducts )
            .then( res => res.json() )
            .then( ( data ) => setListProducts( data ) )
    }, [])

    let {pathname} = useLocation()
    console.log( pathname );

    return (listProducts.length !== 0) && (
        <div className="catalog">
            { listProducts.map( ( item ) =>
                <Link className={'catalog-item'} to={ `${ pathname }/${ item.id }` }>
                    <CardProduct
                    id={ item.id }
                    titleCard={ item.title }
                    priceCard={ item.price }
                    imageCard={ item.image }
                    />
                </Link>
            ) }
            
        </div>
    );
}

export default Catalog;