import { configureStore } from "@reduxjs/toolkit";

// import slice/reducer
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";

// configuration du store, qui mets à disposition les states déclarés dans les slices
// par exemple à l'initialisation de l'application en faisant le useSelector pour récupérer les states:
// - const { info : { isLogged, alias }} = useSelector((state) => state.user);
// -> donnera :
// state: {
//     user: {
//       info: {
//         isLogged: false,
//         alias: "john doe",
//     },
//   }
// } 
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    },
});

export { store };