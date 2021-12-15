import addProductToOrder from "../../components/helpers/addProductToOrder";
import changeCount from "../../components/helpers/changeCount";
import deleteItem from "../../components/helpers/deleteItem";
import getCountTotal from "../../components/helpers/getCountTotal";
import { ADD_PRODUCT, CHANGE_COUNT, DELETE_PRODUCT, SET_COUNT_PRODUCTS, SET_COUNT_TOTAL } from "./type";

const defaultState = {
    listProducts: [],
    countProducts: 0,
    countTotal: 0,
}

const reducerOrderedProducts = ( state = defaultState, action ) => {
    switch ( action.type ) {
        case ADD_PRODUCT:
            return { ...state, listProducts: addProductToOrder( action.payload, state.listProducts ) };
        case DELETE_PRODUCT:
            return { ...state, listProducts: deleteItem( action.payload, state.listProducts ) };
        case SET_COUNT_PRODUCTS:
            return { ...state, countProducts: state.listProducts.length };
        case SET_COUNT_TOTAL:
            return { ...state, countTotal: getCountTotal( state.listProducts ) };
        case CHANGE_COUNT:
            return { ...state, listProducts: changeCount( action.payload.id, state.listProducts, action.payload.value ) }
        default:
            return state;
    }
}

export const addProduct = ( payload ) => ( { type: ADD_PRODUCT, payload } );
export const setCountProducts = () => ( { type: SET_COUNT_PRODUCTS } );
export const setCountTotal = () => ( { type: SET_COUNT_TOTAL } );
export const changeCountProducts = ( payload ) => ( { type: CHANGE_COUNT, payload } );
export const deleteProduct = ( payload ) => ( { type: DELETE_PRODUCT, payload } )

export default reducerOrderedProducts;