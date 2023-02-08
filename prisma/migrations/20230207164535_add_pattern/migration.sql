/*
  Warnings:

  - Added the required column `user_id` to the `Pwa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pwa" ADD COLUMN     "user_id" INTEGER NOT NULL,
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "bayer_id" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Pattern" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "accessLink" TEXT NOT NULL,
    "size" INTEGER NOT NULL DEFAULT 0,
    "path" TEXT NOT NULL DEFAULT '',
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pattern_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "Pwa" ADD CONSTRAINT "Pwa_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
