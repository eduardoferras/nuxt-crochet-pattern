import { addFeedbackJob } from "@jobs/feedback.job.ts";
import { Request, Response } from "express";

export const sendFeedback = async (req: Request, res: Response) => {
	try {
		const { feedback } = req.body;

		if (!feedback || feedback.trim() === "") {
			return res.status(400).json({ message: "Feedback is required" });
		}

		await addFeedbackJob(feedback);

		return res.status(200).json({ message: "Feedback received", feedback });
	} catch (error) {
		console.error("Error sending feedback:", error);
		return res
			.status(500)
			.json({ message: "Internal server error sending feedback" });
	}
};
