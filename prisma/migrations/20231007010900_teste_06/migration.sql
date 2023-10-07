-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER NOT NULL DEFAULT 0,
    "isAtiva" BOOLEAN NOT NULL,
    "horario" TEXT NOT NULL,
    "cursoId" TEXT NOT NULL,
    "coordenadorId" INTEGER NOT NULL,
    CONSTRAINT "turmas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("nomeCurso") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_turmas" ("coordenadorId", "cursoId", "horario", "id", "isAtiva", "nroAlunos") SELECT "coordenadorId", "cursoId", "horario", "id", "isAtiva", "nroAlunos" FROM "turmas";
DROP TABLE "turmas";
ALTER TABLE "new_turmas" RENAME TO "turmas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
