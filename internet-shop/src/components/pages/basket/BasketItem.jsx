import React, { useMemo, useState } from "react";
import constants from "../../helpers/constants";
import { Input, } from 'antd';
import IconTrash from "../../icons/IconTrash";
import './style.css';
import BasketItemImg from "./BasketItemImg";

function BasketItem ( props ) {
    const { product, changeCountInput, deleteItemClick } = props;
    const [ productData, setProductData ] = useState( {} );

    useMemo( () => {
        fetch( `${ constants.urlProducts }${ product.id }` )
            .then( res => res.json() )
            .then( ( data ) => setProductData( data ) )
    }, [ product.id ] );

    let {
        id = '',
        title = '',
        description = '',
        price = '',
        image = ''
    } = productData;

    return ( Object.keys( productData ).length !== 0 ) && (
        <div
            className={ constants.basketPage.basketItem }
            data-id={ id }
        >
            <BasketItemImg title={ title } image={ image } />

            <div className={ constants.basketPage.basketDescr }>
                { description }
            </div>

            <div className={ constants.basketPage.basketPrice }>
                { `$${ price }` }
            </div>

            <div className={ constants.basketPage.basketInp }>
                <Input
                    defaultValue={ product.countUnits }
                    onChange={ changeCountInput }
                />
            </div>

            <IconTrash size={ 30 } click={ deleteItemClick } />
        </div>
    );
}

export default BasketItem;