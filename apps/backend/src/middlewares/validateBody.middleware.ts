import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

const validateBody =
	(schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse(req.body);

		if (result.success) {
			next();
		} else {
			const errorsMessages = result.error.issues.map((issue) => ({
				path: issue.path.join("."),
				message: issue.message,
				code: issue.code,
			}));

			res
				.status(400)
				.json({ message: "Dados inválidos", errors: errorsMessages });
		}
	};

export default validateBody;
