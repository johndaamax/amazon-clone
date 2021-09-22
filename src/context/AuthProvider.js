import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducers/user/reducer'

import {
    USER_LOGIN,
    USER_LOGOUT,
} from '../reducers/user/actionTypes';

const AuthContext = createContext();
const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
}

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { ...state, dispatch }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const login = (dispatch, payload) => {
    dispatch({ type: USER_LOGIN, payload });
    localStorage.setItem('user', JSON.stringify(payload.user));
    localStorage.setItem('token', JSON.stringify(payload.token));
}

const logout = (dispatch) => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context)
        throw new Error(`useAuthContext must be used within a AuthProvider`)
    return context
}

export { AuthProvider, login, logout, useAuthContext }
