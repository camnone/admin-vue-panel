/*
  Warnings:

  - The primary key for the `Pattern` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Pattern" DROP CONSTRAINT "Pattern_pkey",
ADD CONSTRAINT "Pattern_pkey" PRIMARY KEY ("id");
