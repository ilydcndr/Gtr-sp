import * as actionTypes from "../actions/actionTypes"

const cardReducer=(state = {cart:null}, action)=> {

	switch (action.type) {
		case actionTypes.UPDATE_CART:
			return [...state.cart, action.payload];
			default:
			return state;
	
	}
};

export default cardReducer;