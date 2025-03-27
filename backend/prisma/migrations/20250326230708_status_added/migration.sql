/*
  Warnings:

  - Added the required column `status` to the `Grievance` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'INPROGRESS', 'CLOSED');

-- AlterTable
ALTER TABLE "Grievance" ADD COLUMN     "status" "Status" NOT NULL;
