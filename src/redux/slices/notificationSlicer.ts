import {createSlice} from "@reduxjs/toolkit";
import {Notify} from "../../Types";

// const defaultRef = () => {
//     return useRef(null)
// }

const initialState: Notify = {
    header: '',
    text: '',
    ref: null
}

export const notificationSlicer = createSlice({
    name: 'notificationForm',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.header = action.payload.header
            state.text = action.payload.text
        }
    }
})

export const {setNotification} = notificationSlicer.actions

export default notificationSlicer.reducer