import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidadeController";

const createUnidadeController = new CreateUnidadeController();

const unidadeRoutes = Router();

unidadeRoutes.post("/", createUnidadeController.handle)

export { unidadeRoutes }