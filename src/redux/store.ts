import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authFormSlicer";
import cache from "./slices/cacheSlicer";

export const store = configureStore({
    reducer: {
        authForm: auth,
        cache: cache
    }
})