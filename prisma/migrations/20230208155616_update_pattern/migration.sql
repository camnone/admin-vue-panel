/*
  Warnings:

  - You are about to drop the column `size` on the `Pattern` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Pattern` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pattern" DROP COLUMN "size",
DROP COLUMN "type";
