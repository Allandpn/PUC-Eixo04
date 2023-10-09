/*
  Warnings:

  - You are about to drop the column `turmaId` on the `diasdasemana` table. All the data in the column will be lost.
  - Added the required column `nome` to the `turmas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_DiaDaSemanaToTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DiaDaSemanaToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "diasdasemana" ("diaDaSemanaInt") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DiaDaSemanaToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "turmas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "nome" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "turmas_nome_key" ON "turmas"("nome");
CREATE TABLE "new_diasdasemana" (
    "diaDaSemanaInt" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diaDaSemanaString" TEXT NOT NULL
);
INSERT INTO "new_diasdasemana" ("diaDaSemanaInt", "diaDaSemanaString") SELECT "diaDaSemanaInt", "diaDaSemanaString" FROM "diasdasemana";
DROP TABLE "diasdasemana";
ALTER TABLE "new_diasdasemana" RENAME TO "diasdasemana";
CREATE UNIQUE INDEX "diasdasemana_diaDaSemanaInt_key" ON "diasdasemana"("diaDaSemanaInt");
CREATE UNIQUE INDEX "diasdasemana_diaDaSemanaString_key" ON "diasdasemana"("diaDaSemanaString");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_DiaDaSemanaToTurma_AB_unique" ON "_DiaDaSemanaToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_DiaDaSemanaToTurma_B_index" ON "_DiaDaSemanaToTurma"("B");
