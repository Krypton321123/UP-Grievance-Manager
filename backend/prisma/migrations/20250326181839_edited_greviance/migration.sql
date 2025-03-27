/*
  Warnings:

  - Added the required column `created_at` to the `Grievance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aadharNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grievance" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "solved_at" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "aadharNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "designation" TEXT NOT NULL;
