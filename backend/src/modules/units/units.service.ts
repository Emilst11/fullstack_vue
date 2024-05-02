import { HTTPStatusCode } from "../../exceptions/enum"
import { HttpException } from "../../exceptions/globalException"
import { CreateUnit, UnitsModel, UpdateUnit } from "./interface/units.interface"
import Units from "./units.models"

export const getAllUnits = async (): Promise<UnitsModel[] | undefined> => {
    try {
        const data = await Units.findAll({
            where: { isDelete: false },
            order: [
                ["updatedAt", "ASC"]
            ]
        })
        return data
    } catch (error) {
        throw error;
    }
}

export const getUnitsById = async (id: number): Promise<UnitsModel | null> => {
    try {
        const data = await Units.findOne({ where: { id: id } })
        return data
    } catch (error) {
        throw error
    }
}

export const addUnit = async ({ name, address }: CreateUnit) => {
    try {
        const units = await Units.create({
            name,
            address,
            isDelete: false
        })

        return units.dataValues
    } catch (error) {
        throw error
    }
}

export const editUnit = async ({ id, name, address }: UpdateUnit) => {
    try {
        const update = await Units.update({
            name,
            address,
            updatedAt: new Date()
        }, {
            where: { id: id, isDelete: false }
        })

        if(!update){
            throw new HttpException(HTTPStatusCode.BadRequest, `Unit's id ${id} failed to update`)
        }

        return await getUnitsById(id)
    } catch (error) {
        throw error
    }
}

export const deleteUnit = async (id: number) => {
    try {
        const remove = await Units.update({
            isDelete: true
        }, {
            where: {
                id: id
            }
        })

        return remove
    } catch (error) {
        throw error
    }
}