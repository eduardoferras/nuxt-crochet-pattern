import publicFeedbackRoutes from "@routes/public/feedback.routes.ts";
import healthRoutes from "@routes/public/health.routes.ts";
import publicProductRoutes from "@routes/public/product.routes.ts";
import { Router } from "express";

const router = Router();

router.use("/health", healthRoutes);
router.use("/products", publicProductRoutes);
router.use("/feedback", publicFeedbackRoutes);

export default router;
