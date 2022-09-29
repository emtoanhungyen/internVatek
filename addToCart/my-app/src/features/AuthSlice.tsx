import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../api/auth";
import { UserType } from "../types/user.type";

export const registerUser = createAsyncThunk(
    'auth/register',
    async (user: UserType) => {
        const { data } = await signup(user);
        return data
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async (user: UserType) => {
        const { data } = await signin(user);
        return data
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.value = action.payload
        })
    },
});

export default AuthSlice.reducer