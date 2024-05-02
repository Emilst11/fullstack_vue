import { IAbstract } from "../../interface/IAbstract";

export interface IUnitsStore {
    selected: IUnitsResponse | null
    data: IUnitsResponse[]
}

export interface IUnitsResponse extends IAbstract {
    id: number
    name: string
    address: string
}