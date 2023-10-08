/*
  Warnings:

  - You are about to drop the column `turmaId` on the `alunos` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_AlunoToTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlunoToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "alunos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "turmas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alunos" (
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
    "anotacoesAluno" TEXT
);
INSERT INTO "new_alunos" ("anotacoesAluno", "created_at", "dataAdmissao", "dataDesligamento", "dataNascimento", "email", "emailResponsavel", "id", "nome", "nomeResponsavel", "telefone", "telefoneResponsavel", "updated_at") SELECT "anotacoesAluno", "created_at", "dataAdmissao", "dataDesligamento", "dataNascimento", "email", "emailResponsavel", "id", "nome", "nomeResponsavel", "telefone", "telefoneResponsavel", "updated_at" FROM "alunos";
DROP TABLE "alunos";
ALTER TABLE "new_alunos" RENAME TO "alunos";
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToTurma_AB_unique" ON "_AlunoToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToTurma_B_index" ON "_AlunoToTurma"("B");
