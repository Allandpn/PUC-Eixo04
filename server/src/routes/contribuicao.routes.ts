import { Router } from "express";
import { GetContribuicoesController } from "../modules/contribuicoes/GetContribuicoesController";



const getContribuicoesController = new GetContribuicoesController();

const contribuicaoRoutes = Router();

contribuicaoRoutes.get("/", getContribuicoesController.handle);

export { contribuicaoRoutes }