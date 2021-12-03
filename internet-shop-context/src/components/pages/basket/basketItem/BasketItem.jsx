import { useContext, useEffect, useState } from "react";
import Context from "../../../../context";
import changeCount from "../../../helpers/changeCount";
import constants from "../../../helpers/constants";
import deleteItem from "../../../helpers/deleteItem";
import getCountTotal from "../../../helpers/getCountTotal";
import getData from "../../../helpers/getProductData";
import IconTrash from "../../../icons/IconTrash";
import BasketImg from "./BasketImg";
import BasketInput from "./BasketInput";
import BasketItemDescription from "./BasketItemDescription";
import BasketPriceUnits from "./BasketPriceUnits";

function BasketItem ( props ) {
    let { setCountProducts, setCountTotal, listOrderedProducts, setListOrderedProducts } = useContext( Context );
    const { product } = props;
    const [ productData, setProductData ] = useState( {} );

    useEffect( () => { getData( product.id, setProductData ) }, [ product.id ] );
    let { id = '', title = '', description = '', price = '', image = '' } = productData;

    function changeCountInput ( e ) {
        const countValue = e.target.value;
        listOrderedProducts = changeCount( id, listOrderedProducts, countValue );
        const countTotal = getCountTotal( listOrderedProducts );

        setListOrderedProducts( listOrderedProducts );
        setCountTotal( countTotal );
    }

    function deleteItemClick () {
        listOrderedProducts = deleteItem( id, listOrderedProducts );
        const countTotal = getCountTotal( listOrderedProducts );

        setListOrderedProducts( listOrderedProducts );
        setCountProducts( listOrderedProducts.length );
        setCountTotal( countTotal );
    }


    return ( Object.keys( productData ).length > 0 ) && (
        <div data-id={ id } className={ constants.basketPage.basketItem } >
            <BasketImg
                title={ title }
                image={ image } />
            <BasketItemDescription
                description={ description }
                price={ price } />
            <BasketInput
                countUnits={ product.countUnits }
                changeInput={ changeCountInput } />
            <IconTrash size={ 30 } click={ deleteItemClick } />
            <BasketPriceUnits countUnits={ product.countUnits } price={ price } />
        </div>
    );
}

export default BasketItem;