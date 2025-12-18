import type { NextFunction, Request, Response } from "express";
import { type AnyZodObject, ZodError, type ZodIssue } from "zod";

const validateBody =
	(schema: AnyZodObject) =>
	(req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				const errorMessages = error.errors.map((issue: ZodIssue) => ({
					field: issue.path.join(".") || "body",
					message: issue.message,
					code: issue.code,
				}));

				res.status(400).json({ error: "Invalid data", details: errorMessages });
			} else {
				res.status(500).json({ error: "Internal Server Error" });
			}
		}
	};

export default validateBody;
