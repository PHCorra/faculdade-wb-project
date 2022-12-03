/*
  Warnings:

  - You are about to drop the `_producttouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_servicetouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_producttouser` DROP FOREIGN KEY `_ProductToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_producttouser` DROP FOREIGN KEY `_ProductToUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_servicetouser` DROP FOREIGN KEY `_ServiceToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_servicetouser` DROP FOREIGN KEY `_ServiceToUser_B_fkey`;

-- DropTable
DROP TABLE `_producttouser`;

-- DropTable
DROP TABLE `_servicetouser`;
