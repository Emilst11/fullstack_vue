import createError from "http-errors";

export class HttpException {
    constructor(statusCode: number = 500, message: string = 'Internal Server Error'){
        throw createError(statusCode, message)
    }
}