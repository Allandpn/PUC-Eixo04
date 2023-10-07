import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { alunoRoutes } from "./aluno.routes";
import { coordenadorRoutes } from "./coordenador.routes";

const routes = Router();

routes.use("/admin", adminRoutes);
routes.use("/aluno", alunoRoutes);
routes.use("/coordenador", coordenadorRoutes)

export { routes };