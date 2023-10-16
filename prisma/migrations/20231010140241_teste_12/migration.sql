/*
  Warnings:

  - The primary key for the `emprestimoinstrumento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `emprestimoinstrumento` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_emprestimoinstrumento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instrumentoId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "dataInicialEmprestimo" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "dataFinalEmprestimo" DATETIME,
    CONSTRAINT "emprestimoinstrumento_instrumentoId_fkey" FOREIGN KEY ("instrumentoId") REFERENCES "instrumentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "emprestimoinstrumento_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_emprestimoinstrumento" ("alunoId", "dataFinalEmprestimo", "dataInicialEmprestimo", "instrumentoId") SELECT "alunoId", "dataFinalEmprestimo", "dataInicialEmprestimo", "instrumentoId" FROM "emprestimoinstrumento";
DROP TABLE "emprestimoinstrumento";
ALTER TABLE "new_emprestimoinstrumento" RENAME TO "emprestimoinstrumento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
