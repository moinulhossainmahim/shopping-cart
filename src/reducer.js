import { CLEAR_CART, DECREASE, INCREASE } from './actions'
const reducer = (state, action) => {
	if (action.type === CLEAR_CART) {
		return { ...state, cart: [] }
	}
	return state
}

export default reducer
