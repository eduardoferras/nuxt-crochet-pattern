import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

const validateBody =
	(schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse(req.body);
		if (result.success) {
			next();
		} else {
			const errorMessages = result.error.issues.map((issue) => ({
				field: issue.path.join(".") || "body",
				message: issue.message,
				code: issue.code,
			}));

			res.status(400).json({ error: "Invalid data", details: errorMessages });
		}
	};

export default validateBody;
