/*
  Warnings:

  - You are about to alter the column `discordId` on the `discordserver` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `discordserver` MODIFY `discordId` INTEGER NOT NULL;
