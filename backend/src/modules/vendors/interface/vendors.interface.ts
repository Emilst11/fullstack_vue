import { Abstract } from "../../../utils/abstract.interface";

export interface VendorsModel extends Abstract {
    id?: number;
    vendorId: string;
    vendorName: string;
    address: string;
    unitId: number;
    isDelete: boolean;
}

export interface VendorInsert {
    vendorId: string;
    vendorName: string;
    address: string;
    unitId: number;
}

export interface VendorGetParams {
    id: number
    page: number
    pageSize: number
}