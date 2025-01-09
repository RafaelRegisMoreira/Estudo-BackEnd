import { Router } from "express";
import { productRoutes } from "./products/product.routes.js";
import { categoriesRoutes } from "./categories/category.routes.js";

export const routes = Router();

routes.use('/products', productRoutes);
routes.use('/categories', categoriesRoutes);