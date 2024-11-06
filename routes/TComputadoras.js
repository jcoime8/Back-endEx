import { Router } from "express";
import { deleteTComputador, getAllTcomputadoras, getIdTcomputador, postTcomputadores, putTcomputador } from "../controllers/tcomputadoras.controllers.js";

const tcomputador = Router();

tcomputador.get('/', getAllTcomputadoras)
tcomputador.get('/:id', getIdTcomputador)
tcomputador.post('/', postTcomputadores)
tcomputador.put('/:id', putTcomputador)
tcomputador.delete('/:id', deleteTComputador)

export default tcomputador