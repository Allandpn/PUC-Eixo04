/*
  Warnings:

  - A unique constraint covering the columns `[diaDaSemanaString]` on the table `diasdasemana` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "diasdasemana_diaDaSemanaString_key" ON "diasdasemana"("diaDaSemanaString");
