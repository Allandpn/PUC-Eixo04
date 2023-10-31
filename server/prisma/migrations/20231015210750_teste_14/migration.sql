/*
  Warnings:

  - You are about to drop the `_CursoToTurma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TurmaToUnidade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `turmaId` to the `cursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turmaId` to the `unidades` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_CursoToTurma_B_index";

-- DropIndex
DROP INDEX "_CursoToTurma_AB_unique";

-- DropIndex
DROP INDEX "_TurmaToUnidade_B_index";

-- DropIndex
DROP INDEX "_TurmaToUnidade_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CursoToTurma";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_TurmaToUnidade";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL,
    "turmaId" INTEGER NOT NULL,
    CONSTRAINT "cursos_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cursos" ("id", "nomeCurso") SELECT "id", "nomeCurso" FROM "cursos";
DROP TABLE "cursos";
ALTER TABLE "new_cursos" RENAME TO "cursos";
CREATE UNIQUE INDEX "cursos_nomeCurso_key" ON "cursos"("nomeCurso");
CREATE TABLE "new_unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "turmaId" INTEGER NOT NULL,
    CONSTRAINT "unidades_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_unidades" ("id", "nome") SELECT "id", "nome" FROM "unidades";
DROP TABLE "unidades";
ALTER TABLE "new_unidades" RENAME TO "unidades";
CREATE UNIQUE INDEX "unidades_nome_key" ON "unidades"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
