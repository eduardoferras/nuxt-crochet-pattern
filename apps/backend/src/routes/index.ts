import feedbackRouter from "@routes/feedback.routes.ts";
import healthRouter from "@routes/health.routes.ts";
import productRouter from "@routes/product.routes.ts";
import { Router } from "express";

const router = Router();

router.use("/health", healthRouter);
router.use("/products", productRouter);
router.use("/feedback", feedbackRouter);

export default router;
