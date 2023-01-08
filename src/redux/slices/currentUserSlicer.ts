import {createSlice} from "@reduxjs/toolkit";
import {User} from "../../Types";

const noUser = () => ({id: 0, name: '', email: '', password: '', role: ''})
const getInitialState = () => {
    let localData = localStorage.getItem('user')
    return localData ? JSON.parse(localData) : noUser;
}

const initialState: User = {
    id: getInitialState().id,
    login: '',
    dateOfBirth: '',
    firstName: getInitialState().firstName,
    lastName: getInitialState().lastName,
    role: getInitialState().role
}

export const currentUserSlicer = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {id, firstName, lastName, role} = action.payload
            state.id = id
            state.firstName = firstName
            state.lastName = lastName
            state.role = role
            localStorage.setItem('user', JSON.stringify(state))
        },
        logout: (state) => {
            state.id = 0
            state.firstName = ''
            state.lastName = ''
            state.role = 'user'
            localStorage.setItem('user', JSON.stringify(state))
        }
    }
})

export const {setUser, logout} = currentUserSlicer.actions

export default currentUserSlicer.reducer










