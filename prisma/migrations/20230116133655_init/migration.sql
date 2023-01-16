/*
  Warnings:

  - You are about to drop the column `datatime` on the `sensors_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `sensors_data` DROP COLUMN `datatime`,
    ADD COLUMN `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
