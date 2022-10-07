import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, editProduct, getAllProducts, getOneProduct, removeProduct } from "../api/products";
import { ProductType } from "../types/product.type";

export const getAll = createAsyncThunk(
    'product/getAll',
    async () => {
        const { data } = await getAllProducts();
        return data
    }
)
export const readProduct = createAsyncThunk(
    'product/readProduct',
    async (id: any) => {
        const { data } = await getOneProduct(id);
        return data
    }
)
export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (product: any) => {
        const { data } = await addProduct(product);
        return data
    }
)
export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id: any) => {
        const { data } = await removeProduct(id);
        return data
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product: any) => {
        const { data } = await editProduct(product);
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
        builder.addCase(readProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.value = action.payload
            // state.value = state.value.filter((item: ProductType) => item.id !== action.payload);
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
});
export default ProductSlice.reducer