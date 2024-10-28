/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Made the column `orderId` on table `booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `orderId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Booking_orderId_key` ON `Booking`(`orderId`);
