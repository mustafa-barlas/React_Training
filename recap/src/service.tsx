import axios from "axios";
import { IUser } from "./models/IUser";

const baseUrl = 'https://dummyjson.com/'

const config = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    //headers: {"token": "token123"}
    // auth: {
    //     username: "mustafa",
    //     password: "12345"
    // }

})


// User Login

export const userLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }

    return config.post<IUser>('auth/login', sendObj)
}