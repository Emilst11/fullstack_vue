import { Router, Request, Response } from "express";
import routerUser from "./modules/users/users.controller";
import unitsRouter from "./modules/units/units.controller";
import vendorRoutes from "./modules/vendors/vendors.controller";

const router = Router()

router.get('/', async (req: Request, res:Response) => {
    res.status(200).json({
        message: 'Hello World'
    });
})

router.use('/auth', routerUser)
router.use('/units', unitsRouter)
router.use('/vendors', vendorRoutes)

export default router