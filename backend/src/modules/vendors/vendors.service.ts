import { getUnitsById } from "../units/units.service"
import { VendorGetParams, VendorInsert } from "./interface/vendors.interface"
import Vendors from "./vendors.model"
import { HttpException } from "../../exceptions/globalException"
import { HTTPStatusCode } from "../../exceptions/enum"

export const getAllVendors = async ({
    id,
    page = 1,
    pageSize = 10
}: VendorGetParams) => {
    try {
        const { count } = await Vendors.findAndCountAll({
            where: {
                unitId: id || 1,
                isDelete: false,
            }
        })

        const totalPages = Math.ceil(count / pageSize);
        const offset = (page - 1) * pageSize;

        const data = await Vendors.findAll({
            where: {
                unitId: id || 1,
                isDelete: false,
            },
            offset: offset,
            limit: pageSize
        })

        return {
            data,
            meta: {
                totalData: count,
                totalPages,
                currentPage: page,
                pageSize
            }
        }
    } catch (error: any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}

export const getVendorId = async (id: string, unitId: number) => {
    try {
        return await Vendors.findOne({ where: { vendorId: id, unitId } })
    } catch (error: any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}

export const addNewVendor = async ({ vendorId, vendorName, address, unitId }: VendorInsert) => {
    try {
        const noWhiteSpace = /^\S+$/
        const units = await getUnitsById(unitId);
        if (!units?.id) {
            throw new HttpException(HTTPStatusCode.BadRequest, "Unit not found")
        }

        if(!vendorId || !vendorName || !address || !unitId){
            throw new HttpException(HTTPStatusCode.BadRequest, "There's the column still blank")
        }

        if(!noWhiteSpace.test(vendorId)){
            throw new HttpException(HTTPStatusCode.BadRequest, "Don't use space in Vendor Id")
        }

        const checkUniqueVendor = await getVendorId(vendorId, unitId)

        if(checkUniqueVendor){
            throw new HttpException(HTTPStatusCode.BadRequest, "Vendor ID was on the list")
        }

        const insert = await Vendors.create({
            vendorId,
            vendorName,
            unitId: units.id,
            address,
            isDelete: false
        })

        return insert.dataValues
    } catch (error: any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}

export const updateVendor = async ({ vendorId, vendorName, address, unitId }: VendorInsert) => {
    try {
        const update = await Vendors.update({
            vendorId,
            vendorName,
            address,
            updatedAt: new Date()
        }, {
            where: {
                vendorId: vendorId,
                unitId: unitId
            }
        })

        if(!update){
            throw new HttpException(HTTPStatusCode.BadRequest, `Vendors's id ${vendorId} failed to update`)
        }

        return await getVendorId(vendorId, unitId)
    } catch (error: any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}

export const deleteVendor = async (id: string, unitId: number) => {
    try {
        // const remove = await Vendors.update({
        //     isDelete: true
        // }, {
        //     where: { vendorId: id, unitId }
        // })

        const remove = await Vendors.destroy({
            where: { vendorId: id, unitId }
        })

        return remove
    } catch (error: any) {
        throw new HttpException(HTTPStatusCode.BadRequest, error.message)
    }
}