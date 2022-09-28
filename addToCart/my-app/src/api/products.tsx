import { TypeProducts } from "../types/products.type";
import { instance } from "./instance";

export const getProducts = () => {
    const url = 'products';
    return instance.get(url);
}
export const getOneProduct = (id: number) => {
    const url = `products/${id}`;
    return instance.get(url);
}
export const addProduct = (product: TypeProducts) => {
    const url = 'products';
    return instance.post(url, product);
}
export const updateProduct = (product: TypeProducts) => {
    const url = `products/${product.id}`;
    return instance.put(url, product);
}
export const removeProduct = (id: number) => {
    const url = `products/${id}`;
    return instance.delete(url);
}

export const search = (keyword: any) => {
    const url = `products?name=${keyword}`;
    return instance.get(url);
}