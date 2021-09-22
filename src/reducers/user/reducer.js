import {
    USER_LOGIN,
    USER_LOGOUT,
} from './actionTypes';

export function reducer(state, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                ...action.payload,
            };
        case USER_LOGOUT:
            return {
                user: {},
                token: null
            };
        default:
            throw new Error(`Error. Unhandled action type ${action.type}`)
    }
};