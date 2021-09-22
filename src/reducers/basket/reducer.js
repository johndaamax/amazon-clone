export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            let index = newBasket.findIndex(b => b.id === action.payload)
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            throw new Error(`Error. Unhandled action type ${action.type}`)
    }
}