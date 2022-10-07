import { instance } from "./instance";

export const getAllProducts = () => {
    const url = '/products';
    return instance.get(url);
}
export const addProduct = (data: any) => {
    const url = '/products';
    return instance.post(url, data);
}
export const editProduct = (data: any) => {
    const url = `/products/${data.id}`;
    return instance.put(url, data);
}
export const removeProduct = (id: any) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const getOneProduct = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}