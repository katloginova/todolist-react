import React, { useMemo, useState } from "react";
import constants from "../../../helpers/constants";
// import './style.css';
import BasketItemElem from "./BasketItemElem";

function BasketItem ( props ) {
    const { product, changeCountInput, deleteItemClick } = props;
    const [ productData, setProductData ] = useState( {} );

    useMemo( () => {
        fetch( `${ constants.urlProducts }${ product.id }` )
            .then( res => res.json() )
            .then( ( data ) => setProductData( data ) )
    }, [ product.id ] );

    return ( Object.keys( productData ).length > 0 ) && (
        <BasketItemElem
            productData={ productData }
            countUnits={ product.countUnits }
            changeCountInput={ changeCountInput }
            deleteItemClick={ deleteItemClick }
        />
    );
}

export default BasketItem;