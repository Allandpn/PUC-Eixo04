import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { alunoRoutes } from "./aluno.routes";

const routes = Router();

routes.use("/admin", adminRoutes);
routes.use("/aluno", alunoRoutes);

export { routes };