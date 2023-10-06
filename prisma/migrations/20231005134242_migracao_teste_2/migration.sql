/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "usuarios_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "usuarios";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "alunos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "dataAdmissao" DATETIME,
    "dataDesligamento" DATETIME,
    "nomeResponsavel" TEXT,
    "telefoneResponsavel" TEXT,
    "emailResponsavel" TEXT,
    "anotacoesAluno" TEXT,
    "turmaId" INTEGER NOT NULL,
    CONSTRAINT "alunos_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contribuicoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataContribuicao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "valorContribuicao" DECIMAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "contribuicoes_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_contribuicoes" ("alunoId", "dataContribuicao", "id", "valorContribuicao") SELECT "alunoId", "dataContribuicao", "id", "valorContribuicao" FROM "contribuicoes";
DROP TABLE "contribuicoes";
ALTER TABLE "new_contribuicoes" RENAME TO "contribuicoes";
CREATE TABLE "new_emprestimoinstrumento" (
    "instrumentoId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "dataInicialEmprestimo" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "dataFinalEmprestimo" DATETIME,

    PRIMARY KEY ("instrumentoId", "alunoId"),
    CONSTRAINT "emprestimoinstrumento_instrumentoId_fkey" FOREIGN KEY ("instrumentoId") REFERENCES "instrumentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "emprestimoinstrumento_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_emprestimoinstrumento" ("alunoId", "dataFinalEmprestimo", "dataInicialEmprestimo", "instrumentoId") SELECT "alunoId", "dataFinalEmprestimo", "dataInicialEmprestimo", "instrumentoId" FROM "emprestimoinstrumento";
DROP TABLE "emprestimoinstrumento";
ALTER TABLE "new_emprestimoinstrumento" RENAME TO "emprestimoinstrumento";
CREATE TABLE "new_enderecos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "unidadeId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "coordenadorId" INTEGER NOT NULL,
    CONSTRAINT "enderecos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enderecos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enderecos_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_enderecos" ("CEP", "alunoId", "bairro", "cidade", "complemento", "coordenadorId", "id", "numero", "rua", "unidadeId") SELECT "CEP", "alunoId", "bairro", "cidade", "complemento", "coordenadorId", "id", "numero", "rua", "unidadeId" FROM "enderecos";
DROP TABLE "enderecos";
ALTER TABLE "new_enderecos" RENAME TO "enderecos";
CREATE UNIQUE INDEX "enderecos_unidadeId_key" ON "enderecos"("unidadeId");
CREATE UNIQUE INDEX "enderecos_alunoId_key" ON "enderecos"("alunoId");
CREATE UNIQUE INDEX "enderecos_coordenadorId_key" ON "enderecos"("coordenadorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");
