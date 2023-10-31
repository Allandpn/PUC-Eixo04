/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `unidades` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "_TurmaToUnidade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TurmaToUnidade_A_fkey" FOREIGN KEY ("A") REFERENCES "turmas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TurmaToUnidade_B_fkey" FOREIGN KEY ("B") REFERENCES "unidades" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_TurmaToUnidade_AB_unique" ON "_TurmaToUnidade"("A", "B");

-- CreateIndex
CREATE INDEX "_TurmaToUnidade_B_index" ON "_TurmaToUnidade"("B");

-- CreateIndex
CREATE UNIQUE INDEX "unidades_nome_key" ON "unidades"("nome");
