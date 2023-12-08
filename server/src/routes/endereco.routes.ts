import { Router } from "express";
import { GetEnderecosController } from "../modules/endereco/GetEnderecosController";

const getEnderecosController = new GetEnderecosController();

const enderecoRoutes = Router();

enderecoRoutes.get("/", getEnderecosController.handle);

export { enderecoRoutes }