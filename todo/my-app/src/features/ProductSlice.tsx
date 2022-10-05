import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../api/products";

export const getAll = createAsyncThunk(
    'product/getAll',
    async () => {
        const { data } = await getAllProducts();
        return data
    }
)

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
});
export default ProductSlice.reducer