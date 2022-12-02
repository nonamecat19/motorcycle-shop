import {createSlice} from "@reduxjs/toolkit";
import {Orders} from "../../Types";


const getInitialState = (): Orders => {
    let localOrders = localStorage.getItem('orders')
    return localOrders ? JSON.parse(localOrders) : [];

}

const initialState = {
    order: getInitialState()
}

export const orderSlicer = createSlice({
    name: 'cache',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
            localStorage.setItem('orders', JSON.stringify(action.payload))
        }
    }
})

export const {setOrder} = orderSlicer.actions

export default orderSlicer.reducer