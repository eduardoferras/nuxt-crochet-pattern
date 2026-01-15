import { sendFeedback } from "@controllers/feedback.controller.ts";
import validateBody from "@middlewares/validateBody.middleware.ts";
import { feedbackZodSchema } from "@schemas/feedback.schema.ts";
import { Router } from "express";

const feedbackRouter = Router();

feedbackRouter.post("/", validateBody(feedbackZodSchema), sendFeedback);

export default feedbackRouter;
