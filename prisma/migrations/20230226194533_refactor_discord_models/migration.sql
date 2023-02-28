/*
  Warnings:

  - You are about to drop the column `channelId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `channel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `discordserver` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[discordChannelId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `discordChannelId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discordGuildId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `channel` DROP FOREIGN KEY `Channel_discordServerId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_channelId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `channelId`,
    ADD COLUMN `discordChannelId` VARCHAR(191) NOT NULL,
    ADD COLUMN `discordGuildId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `channel`;

-- DropTable
DROP TABLE `discordserver`;

-- CreateIndex
CREATE UNIQUE INDEX `Product_discordChannelId_key` ON `Product`(`discordChannelId`);
