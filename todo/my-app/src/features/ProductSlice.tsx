import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid';

export interface InputType {
    id?: string,
    name: string,
    price: number,
    desc: string
}
export interface Type {
    value: InputType[]
}
const initialState: Type = {
    value: [

    ]
}
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        createProduct: (state, action: PayloadAction<InputType>) => {
            const products = action.payload;
            state.value.push({ ...products, id: uuid() });
            // console.log('data', action.payload);
            // console.log('state', state.value);

        },
        removeProduct: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const product = state.value.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
            state.value = product;
            console.log('tim', product);

            console.log('action', action.payload);

        }
    }
});
export const { createProduct, removeProduct, updateProduct } = ProductSlice.actions
export default ProductSlice.reducer