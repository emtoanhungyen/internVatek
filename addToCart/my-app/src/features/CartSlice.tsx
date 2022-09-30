import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeProducts } from "../types/products.type";
import { toast } from "react-toastify";

export interface cartItem extends TypeProducts {
    quantity: number
}
export interface Cart {
    cart: cartItem[],
    total: number,
    totalItem: number,
    quantityProductInCart: number
}
const initialState: Cart = {
    cart: [],
    total: 0,
    totalItem: 0,
    quantityProductInCart: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocart: (state, action: PayloadAction<cartItem>) => {
            const products = action.payload;
            const checkCart = state.cart.find((item) => item.id === products.id);
            if (checkCart) {
                checkCart.quantity += 1;
                toast.success(`+ 1 ${products.name} vào giỏ hàng.`);
            } else {
                state.cart.push({ ...products, quantity: 1 });
                toast.success(`Đã thêm vào giỏ hàng.`);
                state.quantityProductInCart += 1;
            }
            state.totalItem += 1;
            state.total += Number(products.price);
        },
        removeProductToCart: (state, action) => {
            const products = action.payload;
            const checkCart = state.cart.find((item) => item.id === products);
            state.cart = state.cart.filter((item) => item.id !== products);
            toast.success('Đã xóa khỏi giỏ hàng.');
            if (checkCart) {
                state.totalItem -= checkCart.quantity;
                state.total -= Number(checkCart.price) * checkCart.quantity;
            }
            state.quantityProductInCart -= 1;
        },
        incrementProduct: (state, action) => {
            const products = action.payload;
            const check = state.cart.find((item) => item.id === products);
            if (check) {
                check.quantity += 1;
                state.totalItem += 1;
                state.total += Number(check.price);
            }
        },
        derementProduct: (state, action) => {
            const products = action.payload;
            const check = state.cart.find((item) => item.id === products);
            if (check?.id) {
                check.quantity -= 1;
                if (check?.quantity === 0) {
                    state.cart = state.cart.filter((item) => item.id !== products);
                    toast.success('Đã xóa sản phẩm khỏi giỏ hàng.');
                    state.quantityProductInCart -= 1;
                }
                state.totalItem -= 1;
                state.total -= Number(check.price);
            }
        }
    },
});

export const { addTocart, removeProductToCart, incrementProduct, derementProduct } = CartSlice.actions
export default CartSlice.reducer