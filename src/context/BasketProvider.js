import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducers/basket/reducer';

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
    dispatch({ type: 'ADD_TO_BASKET', payload: item })
}

const removeFromBasket = (dispatch, id) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: id })
}

const useBasketContext = () => {
    const context = useContext(BasketContext)
    if (!context)
        throw new Error(`useBasketContext must be used within a BasketProvider`)
    return context
}

export { BasketProvider, useBasketContext, addToBasket, removeFromBasket }
