import { getAllProducts } from "@controllers/product.controller.ts";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/", getAllProducts);

export default productRouter;
