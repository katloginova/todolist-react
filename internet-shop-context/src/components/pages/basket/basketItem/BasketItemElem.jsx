import React from "react";
import constants from "../../../helpers/constants";
import { Input } from 'antd';
import IconTrash from "../../../icons/IconTrash";

import BasketImg from "./BasketImg";


function BasketItemElem ( { productData, countUnits, changeCountInput, deleteItemClick } ) {
    let {
        id = '',
        title = '',
        description = '',
        price = '',
        image = ''
    } = productData;

    return (
        <div
            className={ constants.basketPage.basketItem }
            data-id={ id }
        >
            <BasketImg title={ title } image={ image } />

            <div className={ constants.basketPage.basketDescr }> { description } </div>

            <div className={ constants.basketPage.basketPrice }> { `$${ price }` } </div>

            <div className={ constants.basketPage.basketInp }>
                <Input
                    defaultValue={ countUnits }
                    onChange={ changeCountInput }
                />
            </div>

            <IconTrash size={ 30 } click={ deleteItemClick } />
        </div>
    );
}

export default BasketItemElem;