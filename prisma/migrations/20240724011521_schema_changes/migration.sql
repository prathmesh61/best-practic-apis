/*
  Warnings:

  - You are about to drop the column `followers` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "followers";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "followers" INTEGER[];
