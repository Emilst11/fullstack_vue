import { Axios } from "../axios"
import { IAuthLoginPayload, IAuthRegistPayload } from "../interface/IAuth"
import Cookies from "js-cookie";

export const handleLogin = async(payload: IAuthLoginPayload) => {
    try {
        const { data } = await Axios.post('/auth/login', payload)
        const token = data.data.token
        Cookies.set('token', token, {
            expires: 12/24
        })
        return data
    } catch (error: any) {
        return error.response.data
    }
}

export const handleRegistration = async(payload: IAuthRegistPayload) => {
    try {
        const { data } = await Axios.post('/auth/regist', payload)
        return data
    } catch (error: any) {
        return error.response.data
    }
}