import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    notify: {
        header: "",
        text: ""
    }
}

export const notifySlicer = createSlice({
    name: 'notify',
    initialState,
    reducers: {
        setNotify: (state, action) => {
            state.notify = action.payload
        }
    }
})

export const {setNotify} = notifySlicer.actions
export default notifySlicer.reducer