import { createStore } from "redux";
import reducerProducts from "../modules/listOrderedProducts/reducer";

const store = createStore( reducerProducts );

export default store;