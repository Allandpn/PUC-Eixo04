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
    "anotacoesAluno" TEXT,
    "turmaId" INTEGER,
    CONSTRAINT "alunos_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_alunos" ("anotacoesAluno", "created_at", "dataAdmissao", "dataDesligamento", "dataNascimento", "email", "emailResponsavel", "id", "nome", "nomeResponsavel", "telefone", "telefoneResponsavel", "turmaId", "updated_at") SELECT "anotacoesAluno", "created_at", "dataAdmissao", "dataDesligamento", "dataNascimento", "email", "emailResponsavel", "id", "nome", "nomeResponsavel", "telefone", "telefoneResponsavel", "turmaId", "updated_at" FROM "alunos";
DROP TABLE "alunos";
ALTER TABLE "new_alunos" RENAME TO "alunos";
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
