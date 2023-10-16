/*
  Warnings:

  - You are about to drop the column `turmaId` on the `cursos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "isAtiva" BOOLEAN,
    "horario" TEXT NOT NULL,
    "cursoId" TEXT,
    "coordenadorId" INTEGER,
    CONSTRAINT "turmas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("nomeCurso") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_turmas" ("coordenadorId", "cursoId", "horario", "id", "isAtiva", "nroAlunos") SELECT "coordenadorId", "cursoId", "horario", "id", "isAtiva", "nroAlunos" FROM "turmas";
DROP TABLE "turmas";
ALTER TABLE "new_turmas" RENAME TO "turmas";
CREATE TABLE "new_cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL
);
INSERT INTO "new_cursos" ("id", "nomeCurso") SELECT "id", "nomeCurso" FROM "cursos";
DROP TABLE "cursos";
ALTER TABLE "new_cursos" RENAME TO "cursos";
CREATE UNIQUE INDEX "cursos_nomeCurso_key" ON "cursos"("nomeCurso");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
