import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin, signup, getAllUser } from "../api/auth";
import { UserType } from "../types/user.type";

export const registerUser = createAsyncThunk(
    'users/register',
    async (user: UserType) => {
        const { data } = await signup(user);
        return data
    }
)
export const login = createAsyncThunk(
    'users/login',
    async (user: UserType) => {
        const { data } = await signin(user);
        return data
    }
)
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async () => {
        const { data } = await getAllUser();
        return data
    }
)

const AuthSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.value = action.payload;
            console.log(state.value);
            
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.value = action.payload;
            localStorage.setItem('users', JSON.stringify(action.payload));
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    },
});

export default AuthSlice.reducer