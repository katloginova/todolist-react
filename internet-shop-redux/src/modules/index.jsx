import { combineReducers } from "redux";
import reducerOrderedProducts from "./listOrderedProducts/reducer";
import reducerFetchedProducts from "./listFetchedProducts/reducer";

const rootReducer = combineReducers( {
    orderedProducts: reducerOrderedProducts,
    fetchedProducts: reducerFetchedProducts,
} )

export default rootReducer;