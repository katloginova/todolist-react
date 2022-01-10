import getUser from "../../helpers/getUser";
import { typesAction, typesState } from "../../helpers/types";
import { GET_USER, USER_NAME } from "./type";



const defaultState: typesState = {
    users: [],
    user: null,
    userName: '',
}

const reducerUsers: any = (state = defaultState, action: typesAction) => {
    switch(action.type){
        case GET_USER:
            return {...state, user: getUser(state.users, action.payload)};
        case USER_NAME:
            return { ...state, userName: action.payload };
        default:
            return state;
    }
}

export const getUserName = (payload: string) => ({type: USER_NAME, payload});
export const getUserData = (payload: string) => ({ type: GET_USER, payload });

export default reducerUsers;