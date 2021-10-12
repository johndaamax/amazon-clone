import * as actionTypes from './actionTypes'

function setQuantity(state, action) {
    let newBasket = [...state.basket];
    let itemIndex = newBasket.findIndex(b => b.id === action.payload.id);
    let newItem = { ...newBasket[itemIndex], quantity: action.payload.quantity };
    newBasket.splice(itemIndex, 1, newItem);
    return { ...state, basket: newBasket };
}

export function reducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case actionTypes.REMOVE_ITEM_FROM_BASKET:
            let newBasket = [...state.basket]
            let index = newBasket.findIndex(b => b.id === action.payload)
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            return {
                ...state,
                basket: newBasket
            }
        case actionTypes.SET_QUANTITY:
            return setQuantity(state, action)
        default:
            throw new Error(`Error. Unhandled action type ${action.type}`)
    }
}