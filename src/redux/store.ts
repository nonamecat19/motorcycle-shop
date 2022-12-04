import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authFormSlicer";
import cache from "./slices/cacheSlicer";
import notification from "./slices/notificationSlicer";
import motorcycles from "./slices/motorcyclesSlicer";
import order from "./slices/orderSlicer";

export const store = configureStore({
    reducer: {
        authForm: auth,
        cache: cache,
        notification: notification,
        motorcycles: motorcycles,
        order: order
    }
})