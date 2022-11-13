import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authFormSlicer";
import notify from "./slices/notify";

export const store = configureStore({
    reducer: {
        authForm: auth,
        notify: notify
    }
})