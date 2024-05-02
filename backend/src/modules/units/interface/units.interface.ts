import { Abstract } from "../../../utils/abstract.interface";

export interface UnitsModel extends Abstract {
    id?: number;
    name: string;
    address: string;
    isDelete: boolean;
}

export interface CreateUnit {
    name: string;
    address: string;
}

export interface UpdateUnit extends CreateUnit{
    id: number
}