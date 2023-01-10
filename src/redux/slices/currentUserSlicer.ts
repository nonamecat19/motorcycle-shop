import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "../../Types";
import {UserActions} from "../../actions/user";


const initialState: User = {
    id: -1,
    login: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    role: 'user'
}

export const getCurrentUserAsync = createAsyncThunk(
    'currentUser/currentUserAsync',
    async () => {
        let currentUserAction = await new UserActions()
        return await currentUserAction.validateUser()
    }
)

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
        },
        logout: (state) => {
            state.id = -1
            state.firstName = ''
            state.lastName = ''
            state.role = 'user'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUserAsync.pending, (state, action) => {

        })
        builder.addCase(getCurrentUserAsync.fulfilled, (state, action) => {
            // @ts-ignore
            const {id, firstName, lastName, role, dateOfBirth, login} = action.payload
            state.id = id
            state.login = login
            state.firstName = firstName
            state.lastName = lastName
            state.role = role
            state.dateOfBirth = dateOfBirth
        })
        builder.addCase(getCurrentUserAsync.rejected, (state, action) => {
            console.log('rejected')
        })
    }
})

export const {setUser, logout} = currentUserSlicer.actions

export default currentUserSlicer.reducer










