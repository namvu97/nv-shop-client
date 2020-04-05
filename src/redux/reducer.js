import { ADD_TO_CART, REMOVE_CART, CLEAR_CART } from './action'

const InitialState = {
    cart: [],
    total: 0
}

function reducer(state = InitialState, action){
    switch (action.type) {
        case ADD_TO_CART:
            const item = state.cart.find(item => item._id === action.payload._id);
            if(item) {
                item.quantity += 1
                return {
                    ...state,
                    total: state.total + item.price,
                }
            }
            else {
                action.payload.quantity = 1;
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    total: state.total + action.payload.price
                }
            }

        case REMOVE_CART:
            let itemToRemove = state.cart.find(item => item._id === action.payload);
            let new_items = state.cart.filter(item => item._id !== action.payload);
            return {
                ...state,
                cart: new_items,
                total: state.total - (itemToRemove.price * itemToRemove.quantity),
            }    
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0,
            }    
        default:
            return state
    }
}

export default reducer;