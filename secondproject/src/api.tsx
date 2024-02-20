import axios from "axios";
import { IUser, IUsers } from "./models/IUser";
import { IProduct, IProducts } from "./models/IProducts";

const baseUrl = 'https://dummyjson.com/'

const config = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    //headers: {"token": "token123"}
    // auth: {
    //     username: "mustafa",
    //     password: "12345"
    // }

})

export const userLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }

    return config.post<IUser>('auth/login', sendObj)
}

export const products = () => {
    return config.get<IProducts>('products')
}

export const singleProduct = (id: string) => {
    return config.get<IProduct>("/products/" + id)
}

export const searchTerm = (q: string) => {
    return config.get<IProducts>('products/search?q=' + q)
}

export const getAllUsers = () => {
    return config.get<IUsers>('/users')
}

export const categories = () => {
    return config.get<string[]>('/products/categories')
}

export const categoryProduct = (name : string) => {
    return config.get<IProducts>("products/category/"+name)
}