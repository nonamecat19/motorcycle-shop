import {createSlice} from "@reduxjs/toolkit";
import {Motorcycles} from "../../Types";
import JSONData from "../../data.json";

const getInitialState = () => {
    let localData = localStorage.getItem('motorcycles')
    return localData ? JSON.parse(localData) : JSONData.motorcycles;
}

const initialState: {
    motorcycles: Motorcycles
} = {
    motorcycles: getInitialState()
}

export const motorcyclesSlicer = createSlice({
    name: 'motorcycles',
    initialState,
    reducers: {
        setMotorcycles: (state, action) => {
            state.motorcycles = action.payload
            localStorage.setItem('motorcycles', JSON.stringify(action.payload))
        }
    }
})

export const {setMotorcycles} = motorcyclesSlicer.actions

export default motorcyclesSlicer.reducer