-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_enderecos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "unidadeId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "coordenadorId" INTEGER,
    CONSTRAINT "enderecos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enderecos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enderecos_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_enderecos" ("CEP", "alunoId", "bairro", "cidade", "complemento", "coordenadorId", "id", "numero", "rua", "unidadeId") SELECT "CEP", "alunoId", "bairro", "cidade", "complemento", "coordenadorId", "id", "numero", "rua", "unidadeId" FROM "enderecos";
DROP TABLE "enderecos";
ALTER TABLE "new_enderecos" RENAME TO "enderecos";
CREATE UNIQUE INDEX "enderecos_unidadeId_key" ON "enderecos"("unidadeId");
CREATE UNIQUE INDEX "enderecos_alunoId_key" ON "enderecos"("alunoId");
CREATE UNIQUE INDEX "enderecos_coordenadorId_key" ON "enderecos"("coordenadorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
