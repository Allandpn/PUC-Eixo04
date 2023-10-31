/*
  Warnings:

  - You are about to drop the column `turmaId` on the `cursos` table. All the data in the column will be lost.
  - Added the required column `cursoId` to the `turmas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL
);
INSERT INTO "new_cursos" ("id", "nomeCurso") SELECT "id", "nomeCurso" FROM "cursos";
DROP TABLE "cursos";
ALTER TABLE "new_cursos" RENAME TO "cursos";
CREATE UNIQUE INDEX "cursos_nomeCurso_key" ON "cursos"("nomeCurso");
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "nome" TEXT NOT NULL,
    "isAtiva" BOOLEAN,
    "horario" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "coordenadorId" INTEGER,
    "unidadeId" INTEGER NOT NULL,
    CONSTRAINT "turmas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "turmas_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_turmas" ("coordenadorId", "horario", "id", "isAtiva", "nome", "nroAlunos", "unidadeId") SELECT "coordenadorId", "horario", "id", "isAtiva", "nome", "nroAlunos", "unidadeId" FROM "turmas";
DROP TABLE "turmas";
ALTER TABLE "new_turmas" RENAME TO "turmas";
CREATE UNIQUE INDEX "turmas_nome_key" ON "turmas"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
