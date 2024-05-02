import { Abstract } from "../../../utils/abstract.interface";

export interface UsersModel extends Abstract {
    id?: number;
    name: string;
    password: string;
    email: string;
}

export interface UserAuth {
    email: string;
    password: string
}

export interface UserRegist extends UserAuth {
    name: string;
}