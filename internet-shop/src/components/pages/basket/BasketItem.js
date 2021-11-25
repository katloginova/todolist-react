import React, { useMemo, useState } from "react";
import constants from "../../helpers/constants";
import { Input, } from 'antd';
import './style.css';
import IconTrash from "../../icons/IconTrash";


function BasketItem ( props ) {
    const { product, changeCountInput, deleteItemClick } = props;
    const [ productData, setProductData ] = useState( {} );
    
    useMemo( () => {
        fetch( `${ constants.urlProducts }${ product.id }` )
            .then( res => res.json() )
            .then( ( data ) => setProductData( data ) )
    }, [ product.id ] );

    let { id = '', title = '', description = '', price = '', image = '' } = productData;


    return (Object.keys(productData).length !== 0) &&  (
        <div className="basket-item" data-id={ id }>
            
            <div className={ 'basket__img' }>
                <div className={'img-title'}>{ title }</div>
                <img src={ image } alt={ title } />
            </div>

            <div className={ 'basket__descr' }>
                { description }
            </div>

            <div className={ 'basket__price' }>
                { `$${price}` }
            </div>

            <div className={ 'basket__inp' }>
                <Input
                    defaultValue={ product.countUnits }
                    onChange={changeCountInput}
                />
            </div>

            <IconTrash size={ 30 } click={ deleteItemClick }/>
        </div>
    );
}

export default BasketItem;