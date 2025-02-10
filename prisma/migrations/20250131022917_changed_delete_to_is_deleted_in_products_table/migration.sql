/*
  Warnings:

  - You are about to drop the column `deleted` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "deleted",
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false;
