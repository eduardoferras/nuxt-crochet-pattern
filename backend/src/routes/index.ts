import { Router } from "express";
import publicProductRoutes from "@routes/public/product.routes.ts";

const router = Router()

router.use('/products', publicProductRoutes)

export default router
