/*
  Warnings:

  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `quantity_solded` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `service` MODIFY `quantity_solded` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `rg` VARCHAR(191) NOT NULL;
