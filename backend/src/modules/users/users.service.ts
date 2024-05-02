import bcrypt from 'bcrypt'
import Users from './users.model';
import { UserAuth, UserRegist, UsersModel } from './interface/users.interface';
import jwt from 'jsonwebtoken'
import { HttpException } from '../../exceptions/globalException';
import { HTTPStatusCode } from '../../exceptions/enum';

export const createUser = async ({ name, password, email }: UserRegist): Promise<UsersModel> => {
    try {
        const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        const uppercaseRegex = new RegExp(/[A-Z]/);
        const symbolRegex  = new RegExp(/[!@#$%^&*()-+=]/);


        if (!emailRegex.test(email)) {
            throw new HttpException(HTTPStatusCode.BadRequest, "Please provide a valid email address.");
        }

        if(password.length < 8) {
            throw new HttpException(HTTPStatusCode.BadRequest, "Password must be 8 characters long.");
        }

        if(!uppercaseRegex.test(password)){
            throw new HttpException(HTTPStatusCode.BadRequest, "Password must contain at least one uppercase letter.");
        }

        if(!symbolRegex.test(password)){
            throw new HttpException(HTTPStatusCode.BadRequest, "Password must contain at least one symbol character.");
        }
        const salt = await bcrypt.genSalt(10);
        const createPass = await bcrypt.hash(password, salt);
        const user = await Users.create({
            name,
            email,
            password: createPass,
        });

        return user.dataValues;
    } catch (error:any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}

export const login = async ({ email, password }: UserAuth) => {
    try {
        const userData = await Users.findOne({ where: { email } })
        if (!userData) {
            throw new HttpException(HTTPStatusCode.NotFound, 'User not registered')
        }

        const payload = {
            name: userData.name,
            email: userData.email
        }

        if (bcrypt.compareSync(password, userData.password)) {
            const token = jwt.sign(payload, `${process.env.SECRET_KEY}`, {
                expiresIn: '12h'
            })
            return token
        } else {
            throw new HttpException(HTTPStatusCode.BadRequest, "Wrong Credentials")
        }
    } catch (error: any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}