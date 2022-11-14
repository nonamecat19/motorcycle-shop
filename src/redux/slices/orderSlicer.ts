import {createSlice} from "@reduxjs/toolkit";

const localOrders = localStorage.getItem('orders')

const initialState = {
    order: localOrders ? JSON.parse(localOrders) : []
}

export const orderSlicer = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
            console.log(action.payload)
            // localStorage.setItem('orders', JSON.stringify(action.payload))
        }
    }
})

export const {setOrder} = orderSlicer.actions

export default orderSlicer.reducer