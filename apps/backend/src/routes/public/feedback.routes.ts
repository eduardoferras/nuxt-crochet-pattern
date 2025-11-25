import { sendFeedback } from "@controllers/feedback.controller.ts";
import { Router } from "express";

const router = Router();

router.post("/", sendFeedback);

export default router;
