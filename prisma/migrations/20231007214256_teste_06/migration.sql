/*
  Warnings:

  - You are about to drop the column `coordenadorId` on the `tiposdeinstrumentos` table. All the data in the column will be lost.
  - You are about to drop the column `cursoId` on the `tiposdeinstrumentos` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_CoordenadorToTiposDeInstrumento" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CoordenadorToTiposDeInstrumento_A_fkey" FOREIGN KEY ("A") REFERENCES "coordenadores" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoordenadorToTiposDeInstrumento_B_fkey" FOREIGN KEY ("B") REFERENCES "tiposdeinstrumentos" ("nomeInstrumento") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CursoToTiposDeInstrumento" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CursoToTiposDeInstrumento_A_fkey" FOREIGN KEY ("A") REFERENCES "cursos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CursoToTiposDeInstrumento_B_fkey" FOREIGN KEY ("B") REFERENCES "tiposdeinstrumentos" ("nomeInstrumento") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "isAtiva" BOOLEAN,
    "horario" TEXT NOT NULL,
    "cursoId" TEXT NOT NULL,
    "coordenadorId" INTEGER,
    CONSTRAINT "turmas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("nomeCurso") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_turmas" ("coordenadorId", "cursoId", "horario", "id", "isAtiva", "nroAlunos") SELECT "coordenadorId", "cursoId", "horario", "id", "isAtiva", "nroAlunos" FROM "turmas";
DROP TABLE "turmas";
ALTER TABLE "new_turmas" RENAME TO "turmas";
CREATE TABLE "new_tiposdeinstrumentos" (
    "nomeInstrumento" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_tiposdeinstrumentos" ("nomeInstrumento") SELECT "nomeInstrumento" FROM "tiposdeinstrumentos";
DROP TABLE "tiposdeinstrumentos";
ALTER TABLE "new_tiposdeinstrumentos" RENAME TO "tiposdeinstrumentos";
CREATE UNIQUE INDEX "tiposdeinstrumentos_nomeInstrumento_key" ON "tiposdeinstrumentos"("nomeInstrumento");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CoordenadorToTiposDeInstrumento_AB_unique" ON "_CoordenadorToTiposDeInstrumento"("A", "B");

-- CreateIndex
CREATE INDEX "_CoordenadorToTiposDeInstrumento_B_index" ON "_CoordenadorToTiposDeInstrumento"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CursoToTiposDeInstrumento_AB_unique" ON "_CursoToTiposDeInstrumento"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoToTiposDeInstrumento_B_index" ON "_CursoToTiposDeInstrumento"("B");
