import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authFormSlicer";
import cache from "./slices/cacheSlicer";
import cart from "./slices/cartSlicer";

export const store = configureStore({
    reducer: {
        authForm: auth,
        cache: cache,
        cart: cart
    }
})