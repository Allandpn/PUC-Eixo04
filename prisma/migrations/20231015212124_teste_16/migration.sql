-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "turmaId" INTEGER,
    CONSTRAINT "unidades_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_unidades" ("id", "nome", "turmaId") SELECT "id", "nome", "turmaId" FROM "unidades";
DROP TABLE "unidades";
ALTER TABLE "new_unidades" RENAME TO "unidades";
CREATE UNIQUE INDEX "unidades_nome_key" ON "unidades"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
