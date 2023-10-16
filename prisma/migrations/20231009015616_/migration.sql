/*
  Warnings:

  - A unique constraint covering the columns `[diaDaSemanaInt]` on the table `diasdasemana` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "diasdasemana_diaDaSemanaString_key";

-- CreateIndex
CREATE UNIQUE INDEX "diasdasemana_diaDaSemanaInt_key" ON "diasdasemana"("diaDaSemanaInt");
