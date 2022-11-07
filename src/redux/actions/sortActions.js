import * as actionTypes from "./actionTypes"

export const updatedCart = (cart)=>({
    type:actionTypes.UPDATE_CART,
    payload:cart
})