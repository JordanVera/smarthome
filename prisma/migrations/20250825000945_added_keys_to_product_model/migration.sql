-- AlterTable
ALTER TABLE `products` ADD COLUMN `manufacturer` VARCHAR(191) NULL,
    ADD COLUMN `price` DECIMAL(10, 2) NULL,
    ADD COLUMN `purchaseLink` VARCHAR(191) NULL;
