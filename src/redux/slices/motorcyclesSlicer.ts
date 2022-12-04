import {createSlice} from "@reduxjs/toolkit";
import {Cart, Motorcycles} from "../../Types";
import JSONData from "../../data.json";

const getInitialMotorcycles = () => {
    let localData = localStorage.getItem('motorcycles')
    return localData ? JSON.parse(localData) : JSONData.motorcycles;
}

const getInitialCart = () => {
    let Stored = localStorage.getItem('cart')
    return Stored ? JSON.parse(Stored) : []
}

interface State {
    motorcycles: Motorcycles
    filtered: Motorcycles
    cart: Cart
    fullPrice: string
}

const initialState: State = {
    motorcycles: getInitialMotorcycles(),
    filtered: getInitialMotorcycles(),
    cart: getInitialCart(),
    fullPrice: "0"
}

export const motorcyclesSlicer = createSlice({
    name: 'motorcycles',
    initialState,
    reducers: {
        setMotorcycles: (state, action) => {
            state.motorcycles = action.payload
            localStorage.setItem('motorcycles', JSON.stringify(action.payload))
        },
        setFiltered: (state, action) => {
            state.filtered = action.payload
        },
        cardsFilter: (state, action) => {
            let {model, brand} = action.payload
            let data = brand === 'All' ? state.motorcycles : state.motorcycles.filter((item: any) => item.brand.includes(brand))
            state.filtered = data.filter((item: any) => item.model.toLowerCase().includes(model.toLowerCase()))
        },
        setCart: (state, action) => {
            state.cart = action.payload
            localStorage.setItem('cart', JSON.stringify(action.payload))


            let sum: number = 0
            for (let product of state.cart)
                sum += state.motorcycles[product].price

            state.fullPrice = sum.toString()
        }
    }
})

export const {setMotorcycles, setFiltered, cardsFilter, setCart} = motorcyclesSlicer.actions


export default motorcyclesSlicer.reducer