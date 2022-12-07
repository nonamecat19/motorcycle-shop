import {createSlice} from "@reduxjs/toolkit";
import {Comments, CommentElement} from "../../Types";

const getInitialState = (): Comments => {
    let localOrders = localStorage.getItem('comments')
    return localOrders ? JSON.parse(localOrders) : []
}

const initialState = {
    comments: getInitialState()
}

export const orderSlicer = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload
            localStorage.setItem('comments', JSON.stringify(action.payload))
        }
    }
})

export const {setComments} = orderSlicer.actions

export default orderSlicer.reducer