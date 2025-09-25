import products from "@utils/data/products.ts";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
	res.json(products);
};
