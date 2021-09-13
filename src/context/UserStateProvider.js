import React, { createContext, useContext, useReducer } from 'react'

const UserStateContext = createContext();

function UserStateProvider({ reducer, initialState, children }) {
    const [userState, dispatch] = useReducer(reducer, initialState);
    const value = { userState, dispatch }
    return (
        <UserStateContext.Provider value={value}>
            {children}
        </UserStateContext.Provider>
    )
}

const addToBasket = (dispatch, item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item })
}

const removeFromBasket = (dispatch, id) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: id })
}

const useUserContext = () => {
    const context = useContext(UserStateContext)
    if (!context)
        throw new Error(`useUserContext must be used within a UserStateProvider`)
    return context
}

export { UserStateProvider, useUserContext, addToBasket, removeFromBasket }
