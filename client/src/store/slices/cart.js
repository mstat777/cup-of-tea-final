import { createSlice } from "@reduxjs/toolkit";

// initialisation d'une state de base
const initialState = {
    cartInfo: JSON.parse(localStorage.getItem("cart")) || {
        buyer: null,
        product: []
    }
};

// création des actions/reducers via un "slice"
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartInfo.buyer = action.payload.buyer;
            state.cartInfo.product = action.payload.product;
        }
    }
})

export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;