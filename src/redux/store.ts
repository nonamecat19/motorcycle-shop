import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authFormSlicer";

export const store = configureStore({
    reducer: {
        authForm: auth
    }
})