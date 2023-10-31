/*
  Warnings:

  - Added the required column `unidadeId` to the `instrumentos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_instrumentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeInstrumento" TEXT NOT NULL,
    "marcaInstrumento" TEXT NOT NULL,
    "estadoConservacaoDoInstrumento" TEXT NOT NULL,
    "isEmprestado" BOOLEAN,
    "unidadeId" INTEGER NOT NULL,
    CONSTRAINT "instrumentos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_instrumentos" ("estadoConservacaoDoInstrumento", "id", "isEmprestado", "marcaInstrumento", "nomeInstrumento") SELECT "estadoConservacaoDoInstrumento", "id", "isEmprestado", "marcaInstrumento", "nomeInstrumento" FROM "instrumentos";
DROP TABLE "instrumentos";
ALTER TABLE "new_instrumentos" RENAME TO "instrumentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
