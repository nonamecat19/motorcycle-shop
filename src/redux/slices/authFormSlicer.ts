import React, {FC, Fragment} from "react";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

export const authFormSlicer = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setAuthForm: (state, action) => {
            state.auth = action.payload
        },
        toggleAuthForm: (state) => {
            state.auth = !state.auth
        }
    }
})

export const {setAuthForm, toggleAuthForm} = authFormSlicer.actions

export default authFormSlicer.reducer