import {createSlice} from "@reduxjs/toolkit";
import {Motorcycles} from "../../Types";
import JSONData from "../../data.json";

const getInitialState = () => {
    let localData = localStorage.getItem('motorcycles')
    return localData ? JSON.parse(localData) : JSONData.motorcycles;
}

interface State {
    motorcycles: Motorcycles
    filtered: Motorcycles
}

const initialState: State = {
    motorcycles: getInitialState(),
    filtered: getInitialState()
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
        }
    }
})

export const {setMotorcycles, setFiltered, cardsFilter} = motorcyclesSlicer.actions


export default motorcyclesSlicer.reducer