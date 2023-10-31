-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL,
    "turmaId" INTEGER,
    CONSTRAINT "cursos_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_cursos" ("id", "nomeCurso", "turmaId") SELECT "id", "nomeCurso", "turmaId" FROM "cursos";
DROP TABLE "cursos";
ALTER TABLE "new_cursos" RENAME TO "cursos";
CREATE UNIQUE INDEX "cursos_nomeCurso_key" ON "cursos"("nomeCurso");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
