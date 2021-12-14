import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCountProducts, deleteProduct, setCountProducts, setCountTotal } from "../../../../modules/listOrderedProducts/reducer";
import constants from "../../../helpers/constants";
import getData from "../../../helpers/getProductData";
import IconTrash from "../../../icons/IconTrash";
import BasketImg from "./BasketImg";
import BasketInput from "./BasketInput";
import BasketItemDescription from "./BasketItemDescription";
import BasketPriceUnits from "./BasketPriceUnits";

function BasketItem ( props ) {
    const { product } = props;
    const [ productData, setProductData ] = useState( {} );
    const dispatch = useDispatch();

    useEffect( () => { getData( product.id, setProductData ) }, [ product.id ] );
    let { id = '', title = '', description = '', price = '', image = '' } = productData;

    function changeCountInput ( e ) {
        const countValue = e.target.value;
        const payloadCountInput = {
            id: id,
            value: countValue
        };

        dispatch( changeCountProducts( payloadCountInput ) );
        dispatch( setCountProducts() );
        dispatch( setCountTotal() );
    }

    function deleteItemClick () {
        dispatch( deleteProduct( id ) );
        dispatch( setCountProducts() );
        dispatch( setCountTotal() );
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