/*
  Warnings:

  - You are about to drop the column `accessLink` on the `Pattern` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Pattern` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pattern" DROP COLUMN "accessLink",
DROP COLUMN "date";
