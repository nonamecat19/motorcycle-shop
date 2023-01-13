import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {Cart, Motorcycles} from "../../Types";
import {MotorcycleActions} from "../../actions/motorcycle";
import {Notify} from "../../notifications/notifications";

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

const getInitialCart = () => {
    let Stored = localStorage.getItem('cart')
    return JSON.parse(Stored ?? '[]')
}

const getFullPrice = (): string => {
    let motorcycles = JSON.parse(localStorage.getItem('motorcycles') ?? '[]')
    let cartData = getInitialCart()
    let sum: number = 0
    for (let [id, variation, number] of cartData)
        for (let item of motorcycles)
            if (item.id === id)
                sum += item.price * number
    return sum.toString()
}

const initialState: State = {
    motorcycles: [],
    filtered: [],
    min: 1,
    max: 10_000_000,
    model: '',
    brand: 'All',
    cart: getInitialCart(),
    fullPrice: getFullPrice()
}

const filterFunc = (brand: string, motorcycles: Motorcycles, model: string, min: number, max: number) => {
    let data =
        brand === 'All'
            ?
            motorcycles
            :
            motorcycles
                .filter((item: any) =>
                    item.brand.toLowerCase()
                        .includes(
                            brand.toLowerCase()
                        )
                )
    return data.filter((item: any) =>
        item.model
            .toLowerCase()
            .includes(model.toLowerCase())
            && item.price >= min
            && item.price <= max)
}

export const getMotorcyclesAsync = createAsyncThunk(
    'motorcycles/getMotorcyclesAsync',
    async () => {
        let motoAction = await new MotorcycleActions()
        return await motoAction.getMotorcycles()
    }
)

export const motorcyclesSlicer = createSlice({
    name: 'motorcycles',
    initialState,
    reducers: {
        setMotorcycles: (state: Draft<State>, action: PayloadAction<Motorcycles>) => {
            state.motorcycles = action.payload
            state.fullPrice = getFullPrice()
        },
        setFiltered: (state: Draft<State>, action: PayloadAction<Motorcycles>) => {
            state.filtered = action.payload
        },
        cardsFilter: (state: Draft<State>, action: PayloadAction<{model: string, brand: string}>) => {
            let {model, brand} = action.payload
            state.model = model
            state.brand = brand
            state.filtered = filterFunc(brand, state.motorcycles, model, state.min, state.max)
        },
        setMinMax: (state: Draft<State>, action: PayloadAction<{min: number, max: number}>) => {
            let {min, max} = action.payload
            state.min = min
            state.max = max
            state.filtered = filterFunc(state.brand, state.motorcycles, state.model, min, max)
        },
        setCart: (state: Draft<State>, action: PayloadAction<Cart>) => {
            state.cart = action.payload
            localStorage.setItem('cart', JSON.stringify(action.payload))
            state.fullPrice = getFullPrice()
        },
        updateFullPrice: (state: Draft<State>) => {
            state.fullPrice = getFullPrice()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMotorcyclesAsync.fulfilled, (state, action) => {
            // @ts-ignore
            state.motorcycles = action.payload
            // @ts-ignore
            state.filtered = action.payload
        })
        builder.addCase(getMotorcyclesAsync.rejected, () => {
            new Notify().DbError()
        })
    }
})

export const {setMotorcycles, cardsFilter, setMinMax, setCart, updateFullPrice} = motorcyclesSlicer.actions
export default motorcyclesSlicer.reducer