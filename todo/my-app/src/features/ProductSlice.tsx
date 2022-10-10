import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/product.type";

export interface InputType {
    id?: number,
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
        themProduct: (state, action: PayloadAction<InputType>) => {
            const products = action.payload;
            state.value.push({ ...products });
            // console.log('data', action.payload);
            // console.log('state', state.value);

        },
        xoaProduct: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
        suaProduct: (state, action) => {
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
export const { themProduct, xoaProduct, suaProduct } = ProductSlice.actions
export default ProductSlice.reducer