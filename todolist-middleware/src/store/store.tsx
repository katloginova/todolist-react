import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerUsers from "../modules/users/reducer";

const store = createStore(reducerUsers, composeWithDevTools(applyMiddleware(thunk)));

export default store;