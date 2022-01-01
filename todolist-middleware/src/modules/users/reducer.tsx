import { type } from "os";
import { SIGNIN_USER } from "./type";

interface typeAction{
    type: string,
    payload: any,
}

const defaultState = {
    users: [],
    activeUser: {}
}

const reducerUsers = (state = defaultState, action: typeAction) => {
    switch(action.type){
        case SIGNIN_USER:
            return {...state};
        default:
            return state;
    }
}

export const signinUser = (payload: typeAction) => ({type: SIGNIN_USER, payload});

export default reducerUsers;