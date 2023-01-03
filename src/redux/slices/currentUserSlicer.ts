import {createSlice} from "@reduxjs/toolkit";
import {User} from "../../Types";

const noUser = () => ({id: 0, name: '', email: '', password: '', role: ''})
const getInitialState = () => {
    let localData = localStorage.getItem('user')
    return localData ? JSON.parse(localData) : noUser;
}

const initialState: User = {
    id: getInitialState().id,
    first_name: getInitialState().first_name,
    last_name: getInitialState().last_name,
    role: getInitialState().role
}

export const currentUserSlicer = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {id, first_name, last_name, role} = action.payload
            state.id = id
            state.first_name = first_name
            state.last_name = last_name
            state.role = role
            localStorage.setItem('user', JSON.stringify(state))
        },
        logout: (state) => {
            state.id = 0
            state.first_name = ''
            state.last_name = ''
            state.role = ''
            localStorage.setItem('user', JSON.stringify(state))
        }
    }
})

export const {setUser, logout} = currentUserSlicer.actions

export default currentUserSlicer.reducer










