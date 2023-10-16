import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { alunoRoutes } from "./aluno.routes";
import { coordenadorRoutes } from "./coordenador.routes";
import { cursoRoutes } from "./curso.routes";
import { instrumentoRoutes } from "./instrumento.routes";
import { turmaRoutes } from "./turma.routes";
import { unidadeRoutes } from "./unidade.routes";
import { emprestimoRoutes } from "./emprestimo.routes";

const routes = Router();

routes.use("/admin", adminRoutes);
routes.use("/aluno", alunoRoutes);
routes.use("/coordenador", coordenadorRoutes);
routes.use("/curso", cursoRoutes);
routes.use("/instrumento", instrumentoRoutes);
routes.use("/turma", turmaRoutes);
routes.use("/unidade", unidadeRoutes);
routes.use("/emprestimo", emprestimoRoutes);

export { routes };