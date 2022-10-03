import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { signin, signup, getAllUser } from "../api/auth";
import { UserType } from "../types/user.type";

export const registerUser = createAsyncThunk(
    'users/register',
    async (user: UserType) => {
        const { data } = await signup(user);
        return data
    }
)
export const loginUser = createAsyncThunk(
    'users/login',
    async (user: any) => {
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
        builder.addCase(loginUser.fulfilled, (state, action) => {
            try {
                const user = action.payload
                state.value = user;
                localStorage.setItem('auth', JSON.stringify(user));
            } catch (error) {
                console.log(error);
                toast.error('Có lỗi!');
            }
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.value = action.payload;

        })
    },
});

export default AuthSlice.reducer