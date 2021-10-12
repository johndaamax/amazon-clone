import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducers/basket/reducer';
import * as actionTypes from '../reducers/basket/actionTypes'

const BasketContext = createContext();

const initialState = {
    basket: [],
}

function BasketProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { ...state, dispatch }

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}

const addToBasket = (dispatch, item) => {
    dispatch({ type: actionTypes.ADD_ITEM_TO_BASKET, payload: { ...item, quantity: 1 } })
}

const removeFromBasket = (dispatch, id) => {
    dispatch({ type: actionTypes.REMOVE_ITEM_FROM_BASKET, payload: id })
}

const setQuantity = (dispatch, id, quantity) => {
    dispatch({ type: actionTypes.SET_QUANTITY, payload: { id, quantity } })
}

const useBasketContext = () => {
    const context = useContext(BasketContext)
    if (!context)
        throw new Error(`useBasketContext must be used within a BasketProvider`)
    return context
}

export { BasketProvider, useBasketContext, addToBasket, removeFromBasket, setQuantity }
