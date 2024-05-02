import { Request, Response, Router } from "express";
import { addUnit, deleteUnit, editUnit, getAllUnits } from "./units.service";
import { AuthMiddleware } from "../../middleware";

const unitsRouter = Router()

unitsRouter.use(AuthMiddleware)
unitsRouter.get('/get-all', async (req:Request, res: Response) => {
    try {
        const data = await getAllUnits()
        res.status(201).json({
            status: 201,
            message: "Request Success",
            data
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

unitsRouter.post('/', async (req:Request, res: Response) => {
    try {
        const data = await addUnit({
            name: req.body.name,
            address: req.body.address
        })

        res.status(201).json({
            status: 201,
            message: "Insert new Unit Success",
            data
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

unitsRouter.put('/:id', async (req:Request, res: Response) => {
    try {
        const id = +req.params.id
        const data = await editUnit({
            id: id,
            name: req.body.name,
            address: req.body.address
        })
        res.status(201).json({
            status: 201,
            message: `Update units with id ${id} Success`,
            data
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

unitsRouter.delete('/:id', async (req:Request, res: Response) => {
    try {
        const id = +req.params.id
        await deleteUnit(id)

        res.status(201).json({
            status: 201,
            message: `Delete unit with id ${id} Success`
        })
    } catch (error: any) {
        res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

export default unitsRouter