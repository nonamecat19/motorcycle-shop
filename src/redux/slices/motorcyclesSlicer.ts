import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Cart, Motorcycles} from "../../Types";
import JSONData from "../../data.json";
import {getMotorcycles} from "../../db";

const getInitialMotorcycles = () => {
    let localData = localStorage.getItem('motorcycles')
    return localData ? JSON.parse(localData) : JSONData.motorcycles;
}

const getInitialCart = () => {
    let Stored = localStorage.getItem('cart')
    return Stored ? JSON.parse(Stored) : []
}

const getInitialFullPrice = () => {
    let cartData = getInitialCart()
    let motorcyclesData = getInitialMotorcycles()
    let sum: number = 0
    for (let [id, number] of cartData)
        sum += motorcyclesData[id].price * number
    return sum.toString()
}

interface State {
    motorcycles: Motorcycles
    filtered: Motorcycles
    min: number
    max: number
    model: string
    brand: string
    cart: Cart
    fullPrice: string
}

const initialState: State = {
    //TODO optimize this
    motorcycles: getInitialMotorcycles(),
    filtered: getInitialMotorcycles(),
    min: 1,
    max: 1000000,
    model: '',
    brand: 'All',
    cart: getInitialCart(),
    fullPrice: getInitialFullPrice()
}

const filterFunc = (brand: string, motorcycles: Motorcycles, filtered: Motorcycles, model: string, min: number, max: number) => {
    let data =
        brand === 'All'
            ?
            motorcycles
            :
            motorcycles.filter((item: any) => item.brand.includes(brand))
    return data.filter((item: any) => item.model.toLowerCase().includes(model.toLowerCase()) && item.price >= min && item.price <= max)
}

export const getMotorcyclesAsync = createAsyncThunk(
    'motorcycles/getMotorcyclesAsync',
    async function (){
        return await getMotorcycles()
    }
)


// @ts-ignore
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
            state.model = model
            state.brand = brand
            state.filtered = filterFunc(brand, state.motorcycles, state.filtered, model, state.min, state.max)
        },
        setMinMax: (state, action) => {
            let {min, max} = action.payload
            state.min = min
            state.max = max
            state.filtered = filterFunc(state.brand, state.motorcycles, state.filtered, state.model, min, max)
        },
        setCart: (state, action) => {
            state.cart = action.payload
            localStorage.setItem('cart', JSON.stringify(action.payload))

            let sum: number = 0
            for (let product of state.cart)
                sum += state.motorcycles[product[0]].price * product[1]
            state.fullPrice = sum.toString()
        }
    },
    extraReducers: {
        // @ts-ignore
        [getMotorcyclesAsync.pending]: (state: any, action: any) => {
            console.log('pending')
        },
        // @ts-ignore
        [getMotorcyclesAsync.fulfilled]: (state: any, action: any) => {
            console.log('fulfilled')
        },
        // @ts-ignore
        [getMotorcyclesAsync.rejected]: (state: any, action: any) => {
            console.log('rejected')
        },
    }
})

export const {setMotorcycles, setFiltered, cardsFilter, setMinMax, setCart} = motorcyclesSlicer.actions


export default motorcyclesSlicer.reducer