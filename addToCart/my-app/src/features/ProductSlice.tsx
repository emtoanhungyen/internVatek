import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TypeProducts } from "../types/products.type";
import { addProduct, getOneProduct, getProducts, removeProduct, updateProduct } from './../api/products';

export const getAll = createAsyncThunk(
    'product/getAll',
    async () => {
        const { data } = await getProducts();
        return data;
    }
)
export const readProduct = createAsyncThunk(
    'product/readProduct',
    async (id: any) => {
        const { data } = await getOneProduct(id);
        return data;
    }
)
export const createProducts = createAsyncThunk(
    'product/createProducts',
    async (product: TypeProducts) => {
        const { data } = await addProduct(product);
        return data;
    }
)
export const editProducts = createAsyncThunk(
    'product/editProduct',
    async (product: TypeProducts) => {
        const { data } = await updateProduct(product);
        return data;
    }
)
export const deleteProducts = createAsyncThunk(
    'product/deleteProducts',
    async (id: any) => {
        const { data } = await removeProduct(id);
        return data;
    }
)

const ProductSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.value = action.payload;
        })
        builder.addCase(readProduct.fulfilled, (state, action) => {
            state.value = action.payload;
        })
        builder.addCase(deleteProducts.fulfilled, (state, action) => {
            const products = action.payload;
            state.value = state.value.filter((item: TypeProducts) => item.id !== products);
        })
    }
})

export default ProductSlice.reducer