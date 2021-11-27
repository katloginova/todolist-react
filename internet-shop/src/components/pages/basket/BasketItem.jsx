import React, { useMemo, useState } from "react";
import constants from "../../helpers/constants";
import { Input, } from 'antd';
import IconTrash from "../../icons/IconTrash";
import './style.css';

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
            className={ constants.basketPage.classes.basketItem }
            data-id={ id }
        >
            <div className={ constants.basketPage.classes.basketImg }>
                <div className={ constants.basketPage.classes.imgTitle }>
                    { title }
                </div>
                <img src={ image } alt={ title } />
            </div>

            <div className={ constants.basketPage.classes.basketDescr }>
                { description }
            </div>

            <div className={ constants.basketPage.classes.basketPrice }>
                { `$${ price }` }
            </div>

            <div className={ constants.basketPage.classes.basketInp }>
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