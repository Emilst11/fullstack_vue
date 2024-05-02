import axios, { InternalAxiosRequestConfig } from "axios";
import { URL } from "./commonUrl";
import Cookies from "js-cookie";

const Axios = axios.create({
    baseURL: URL.BASE
})

Axios.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    const token = Cookies.get('token')
    if(token){
        req.headers.set('Authorization', `Bearer ${token}`)
    }

    return req
})

export { Axios }