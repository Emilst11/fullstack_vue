import { Router, Request, Response } from "express";
import { createUser, login } from "./users.service";

const routerUser = Router()

routerUser.post('/regist', async (req: Request, res: Response) => {
    try {
        const data = await createUser({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })

        res.status(200).json({
            status: 200,
            message: `Create User with email ${data.email} Success`,
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})


routerUser.post('/login', async (req: Request, res:Response) => {
    try {
        const data = await login({
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).json({
            status: 201,
            message: "Login Successfull",
            data: {
                token: data
            }
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

export default routerUser;