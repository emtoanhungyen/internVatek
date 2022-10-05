import { instance } from "./instance";

export const getAllProducts = () => {
    const url = '/products';
    return instance.get(url);
}