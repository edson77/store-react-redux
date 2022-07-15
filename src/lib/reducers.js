import { actions } from "./actions";


const saveLocalStorage =  (object) => {
    localStorage.setItem("items", JSON.stringify(object) )
}

const initialState = {
    items : JSON.parse(localStorage.getItem("items")) != null ?
    JSON.parse(localStorage.getItem("items")) : []
}
const OnlineStoreApp = (state = initialState, action) =>{

    switch (action.type) {
        case actions.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case actions.UPDATE_CART:
            return {
                ...state,
                items: state.items.map(item =>{
                    return item.id === action.payload.item.id ?
                    {
                        ...item,
                        quantity: action.payload.quantity
                    } : item
                })
            }
        case actions.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => {
                    return item.id != action.payload.id
                })
            }
        case actions.SAVE_CART:
            saveLocalStorage(action.payload.items)
            return state
        default:
            return state
    }

}

export default OnlineStoreApp