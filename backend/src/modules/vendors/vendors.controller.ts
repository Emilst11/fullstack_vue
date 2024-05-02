import { Request, Response, Router } from "express";
import { AuthMiddleware } from "../../middleware";
import { addNewVendor, deleteVendor, getAllVendors, updateVendor } from "./vendors.service";

const vendorRoutes = Router()
vendorRoutes.use(AuthMiddleware)

vendorRoutes.get('/get-all/', async (req: Request, res: Response) => {
    try {
        const { id, page, pageSize }: { id?: string, page?: string, pageSize?: string } = req.query
        const data = await getAllVendors({
            id: id ? +id : 1,
            page: page ? +page : 1,
            pageSize: pageSize ? +pageSize : 10
        })
        res.status(201).json({
            status: 201,
            message: "Request Success",
            ...data
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

vendorRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const data = await addNewVendor({
            vendorId: req.body.vendorId,
            vendorName: req.body.vendorName,
            address: req.body.address,
            unitId: req.body.unitId
        })
        res.status(201).json({
            status: 201,
            message: "Insert new vendor Success",
            data
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

vendorRoutes.put('/', async (req: Request, res: Response) => {
    try {
        const data = await updateVendor({
            vendorId: req.body.vendorId,
            vendorName: req.body.vendorName,
            address: req.body.address,
            unitId: req.body.unitId
        })
        res.status(201).json({
            status: 201,
            message: `Update units with id ${data?.vendorId} Success`,
            data
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

vendorRoutes.delete('/', async (req: Request, res: Response) => {
    try {
        const vendorId = req.query.vendorId as string
        const unitId = req.query.unit as string
        await deleteVendor(vendorId, +unitId)
        res.status(201).json({
            status: 201,
            message: `Delete vendor with id ${vendorId} Success`
        })
    } catch (error: any) {
        console.log(error);
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

export default vendorRoutes