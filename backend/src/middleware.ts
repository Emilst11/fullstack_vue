import { HTTPStatusCode } from "./exceptions/enum";
import { HttpException } from "./exceptions/globalException";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            throw new HttpException(HTTPStatusCode.Unauthorized, "Unauthorized")
        }

        const token = authorizationHeader.split(' ')[1];

        const isVerif = jwt.verify(token, `${process.env.SECRET_KEY}`)

        if (!isVerif) {
            throw new HttpException(HTTPStatusCode.Unauthorized, "Unauthorized")
        }

        return next()
    } catch (error: any) {
        res.status(401).json({
            status: 401,
            message: error?.message
        })
    }
}