import {createSlice} from "@reduxjs/toolkit";


const getInitialState = () => {
    let Stored = localStorage.getItem('cart')
    return Stored ? JSON.parse(Stored) : []
}


const initialState = {
    cart: getInitialState()
}

export const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
            localStorage.setItem('cart', JSON.stringify(action.payload))
        }
    }
})

export const {setCart} = cartSlicer.actions

export default cartSlicer.reducer