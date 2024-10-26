import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartInfo: JSON.parse(localStorage.getItem("cart")) || {
        products: [],
        totalPrice: 0,
        buyer: null,
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cartInfo.products = action.payload.products;
            state.cartInfo.totalPrice = action.payload.totalPrice;
            state.cartInfo.buyer = action.payload.buyer;
        },
        setBuyer: (state, action) => {
            state.cartInfo.buyer = action.payload;
        },
    }
})

export const { 
    setCart, setBuyer 
} = cartSlice.actions;

export default cartSlice.reducer;