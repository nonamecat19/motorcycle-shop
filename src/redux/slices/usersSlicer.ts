import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "../../Types";
import {UserActions} from "../../actions/user";

interface State {
    users: User[]
}

const initialState: State = {
    users: [],
}

export const getUsersAsync = createAsyncThunk(
    'users/getUsersAsync',
    async () => {
        let motoAction = await new UserActions()
        return await motoAction.getUsers()
    }
)

export const usersSlicer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersAsync.pending, (state, action) => {

        })
        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            // @ts-ignore
            state.users = action.payload
            // @ts-ignore
            state.filtered = action.payload
        })
        builder.addCase(getUsersAsync.rejected, (state, action) => {
            console.error('user rejected')
        })
    }
})

export const {} = usersSlicer.actions
export default usersSlicer.reducer