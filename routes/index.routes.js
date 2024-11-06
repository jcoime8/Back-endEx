import ejemplo from "./ejemplo.js"; 
import { Router } from "express";
import tcomputador from "./TComputadoras.js";

const indexRouter = Router();

indexRouter.use('/ejemplo', ejemplo);
indexRouter.use('/Tcomputador', tcomputador)

export default indexRouter;
