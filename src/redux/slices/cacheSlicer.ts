import {createSlice} from "@reduxjs/toolkit";
import {Cache} from "../../Types";

const getInitialState = () => {
    const cache: Cache = {};
    const importAll = (r: any): void => r.keys().forEach((key: string) => (cache[key] = r(key)));
    importAll(require.context('../../assets/motorcycle/', true, /\.(png|ico|svg|jpg|gif)$/))
    importAll(require.context('../../assets/icons/', true, /\.(png|ico|svg|jpg|gif)$/))
    return cache
}

const initialState = {
    cache: getInitialState()
}

export const cacheSlicer = createSlice({
    name: 'cache',
    initialState,
    reducers: {
        setCache: (state, action) => {
            state.cache = action.payload
        }
    }
})

export const {setCache} = cacheSlicer.actions

export default cacheSlicer.reducer