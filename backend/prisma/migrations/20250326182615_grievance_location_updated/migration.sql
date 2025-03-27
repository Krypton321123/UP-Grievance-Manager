/*
  Warnings:

  - Added the required column `City` to the `Grievance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pincode` to the `Grievance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grievance" ADD COLUMN     "City" TEXT NOT NULL,
ADD COLUMN     "Pincode" TEXT NOT NULL;
