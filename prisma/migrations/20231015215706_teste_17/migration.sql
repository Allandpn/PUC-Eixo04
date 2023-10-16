/*
  Warnings:

  - You are about to drop the column `turmaId` on the `unidades` table. All the data in the column will be lost.
  - Added the required column `unidadeId` to the `turmas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "nome" TEXT NOT NULL,
    "isAtiva" BOOLEAN,
    "horario" TEXT NOT NULL,
    "coordenadorId" INTEGER,
    "unidadeId" INTEGER NOT NULL,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "turmas_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_turmas" ("coordenadorId", "horario", "id", "isAtiva", "nome", "nroAlunos") SELECT "coordenadorId", "horario", "id", "isAtiva", "nome", "nroAlunos" FROM "turmas";
DROP TABLE "turmas";
ALTER TABLE "new_turmas" RENAME TO "turmas";
CREATE UNIQUE INDEX "turmas_nome_key" ON "turmas"("nome");
CREATE TABLE "new_unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_unidades" ("id", "nome") SELECT "id", "nome" FROM "unidades";
DROP TABLE "unidades";
ALTER TABLE "new_unidades" RENAME TO "unidades";
CREATE UNIQUE INDEX "unidades_nome_key" ON "unidades"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
