/*
  Warnings:

  - You are about to drop the `pwa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pwa" DROP CONSTRAINT "pwa_user_id_fkey";

-- DropTable
DROP TABLE "pwa";

-- CreateTable
CREATE TABLE "Pwa" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "pattern" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "platform" TEXT NOT NULL,

    CONSTRAINT "Pwa_pkey" PRIMARY KEY ("id")
);
