import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { alunoRoutes } from "./aluno.routes";
import { coordenadorRoutes } from "./coordenador.routes";
import { cursoRoutes } from "./curso.routes";
import { instrumentoRoutes } from "./instrumento.routes";
import { turmaRoutes } from "./turma.routes";

const routes = Router();

routes.use("/admin", adminRoutes);
routes.use("/aluno", alunoRoutes);
routes.use("/coordenador", coordenadorRoutes);
routes.use("/curso", cursoRoutes);
routes.use("/instrumento", instrumentoRoutes);
routes.use("/turma", turmaRoutes);

export { routes };