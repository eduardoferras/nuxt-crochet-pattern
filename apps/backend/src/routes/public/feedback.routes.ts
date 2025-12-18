import { sendFeedback } from "@controllers/feedback.controller.ts";
import validateBody from "@middlewares/validateBody.middleware.ts";
import { feedbackZodSchema } from "@schemas/feedback.schema.ts";
import { Router } from "express";

const router = Router();

router.post("/", validateBody(feedbackZodSchema), sendFeedback);

export default router;
