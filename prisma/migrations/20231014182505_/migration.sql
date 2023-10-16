/*
  Warnings:

  - You are about to drop the column `cursoId` on the `turmas` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_CursoToTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CursoToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "cursos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CursoToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "turmas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "nome" TEXT NOT NULL,
    "isAtiva" BOOLEAN,
    "horario" TEXT NOT NULL,
    "coordenadorId" INTEGER,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_turmas" ("coordenadorId", "horario", "id", "isAtiva", "nome", "nroAlunos") SELECT "coordenadorId", "horario", "id", "isAtiva", "nome", "nroAlunos" FROM "turmas";
DROP TABLE "turmas";
ALTER TABLE "new_turmas" RENAME TO "turmas";
CREATE UNIQUE INDEX "turmas_nome_key" ON "turmas"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CursoToTurma_AB_unique" ON "_CursoToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoToTurma_B_index" ON "_CursoToTurma"("B");
