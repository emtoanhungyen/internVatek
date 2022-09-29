import { UserType } from "../types/user.type";
import { instance } from "./instance";

export const signup = (user: UserType) => {
    const url = `/users`;
    return instance.post(url, { ...user, role: 0 });
}
export const signin = (data: any) => {
    const url = '/login';
    return instance.post(url, data);
}
export const getAllUser = () => {
    const url = 'users';
    return instance.get(url);
}