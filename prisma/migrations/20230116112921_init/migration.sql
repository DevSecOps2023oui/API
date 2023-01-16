-- CreateTable
CREATE TABLE `sensors_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `temperature` DOUBLE NOT NULL,
    `hydrometry` DOUBLE NOT NULL,
    `wind_power` DOUBLE NOT NULL,
    `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_name` VARCHAR(191) NULL,
    `date_insertion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
