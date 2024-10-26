import { configureStore } from "@reduxjs/toolkit";

// import slice/reducer
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
});

export { store };