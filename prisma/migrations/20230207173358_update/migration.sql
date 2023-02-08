/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Pattern` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pattern_name_key" ON "Pattern"("name");
