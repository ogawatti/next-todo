/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `sub` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- DropIndex
DROP INDEX `users_sub_key` ON `users`;

-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `sub` VARCHAR(255) NOT NULL DEFAULT '1234567890';

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `sub` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`sub`);

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_sub_fkey` FOREIGN KEY (`sub`) REFERENCES `users`(`sub`) ON DELETE CASCADE ON UPDATE CASCADE;
