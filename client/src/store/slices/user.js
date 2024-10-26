import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        isLogged: false,
        username: "john doe"
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.userInfo = { 
                isLogged: true, 
                username: action.payload
            };
        },
        signOut: (state) => {
            state.userInfo = { 
                isLogged: false, 
                username: "john doe"
            };
            localStorage.removeItem("auth");
        },
    },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;