/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `admins` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_admins" ("created_at", "dataNascimento", "email", "id", "nome", "senha", "telefone", "updated_at") SELECT "created_at", "dataNascimento", "email", "id", "nome", "senha", "telefone", "updated_at" FROM "admins";
DROP TABLE "admins";
ALTER TABLE "new_admins" RENAME TO "admins";
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
