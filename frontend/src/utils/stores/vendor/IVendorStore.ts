import { IAbstract } from "../../interface/IAbstract";
import { IMeta } from "../responses/IResponses";

export interface IVendorStore {
    data: IVendorResponse[];
    meta?: IMeta;
}

export interface IVendorResponse extends IAbstract{
    i:number
    vendorId: string
    vendorName: string
    address: string
    unitId: number
}

export interface IVendorPayload {
    id: number
    page: number
    pageSize: number
}

export interface ILoadItems {
    page: number
    itemsPerPage: number
}

export interface IVendorPostPayload {
    vendorId: string
    vendorName: string
    address: string
    unitId?: number
}

export interface IVendorDeletePayload {
    vendorId: string
    unit: number
}