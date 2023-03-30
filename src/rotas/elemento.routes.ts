
import {Router} from "express";
import { ElementRepository } from "../repositories/ElementRepository";
import { ElementController } from "../useCase/ElementUser/CreateElement/ElementController";
import { ListCidadeController } from "../useCase/ElementUser/ListCidade/ListCidadeController";
import { ListElementController } from "../useCase/ElementUser/ListElement/ListElementController";
import { ListEstadoController } from "../useCase/ElementUser/ListEstado/ListEstadoController";


const elementoRouter = Router();

const elementController = new ElementController()
const listElementController = new ListElementController()
const listEstadoController = new ListEstadoController()
const listCidadeController = new ListCidadeController()

elementoRouter.post("/local", elementController.handle);

elementoRouter.get("/local", listElementController.handle);
 
 elementoRouter.get("/local/:cidade", listEstadoController.handle);
 
 elementoRouter.get("/local/:estado", listCidadeController.handle);

export{ elementoRouter}


