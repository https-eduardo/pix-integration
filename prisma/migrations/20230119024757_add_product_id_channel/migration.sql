/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `channel` ADD COLUMN `productId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Channel_productId_key` ON `Channel`(`productId`);
