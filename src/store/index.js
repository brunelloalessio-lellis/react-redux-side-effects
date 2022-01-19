import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cart"
import productsSliceReducer from "./products"

const store = configureStore({
    reducer:{
        cart: cartSliceReducer,
        products: productsSliceReducer,
    }
})

export default store