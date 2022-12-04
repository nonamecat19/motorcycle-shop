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
        }
    }
})

export const {setMotorcycles, setFiltered} = motorcyclesSlicer.actions

export default motorcyclesSlicer.reducer