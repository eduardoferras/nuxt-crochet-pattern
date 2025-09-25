import { Router } from "express";
import publicProductRoutes from "@routes/public/product.routes.ts";
import healthRoutes from "@routes/public/health.routes.ts";

const router = Router();

router.use("/health", healthRoutes);
router.use("/products", publicProductRoutes);

export default router;
