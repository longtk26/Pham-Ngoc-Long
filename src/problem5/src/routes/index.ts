import { Router } from "express";
import productRoute from "./product";

const indexRoute = Router();


indexRoute.use("/product", productRoute)


export default indexRoute;