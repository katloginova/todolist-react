import { GET_PRODUCTS } from "./type"

const defaultState = {
    products: [],
}

const reducerFetchedProducts = ( state = defaultState, action ) => {
    switch ( action.type ) {
        case GET_PRODUCTS:
            return { ...state, products: [ ...action.payload ] };
        default:
            return state;
    }
}

export const getProducts = ( payload ) => ( { type: GET_PRODUCTS, payload } );

export default reducerFetchedProducts;