export interface IAuthLoginPayload {
    email: string
    password: string
}

export interface IAuthRegistPayload extends IAuthLoginPayload{
    name: string
}