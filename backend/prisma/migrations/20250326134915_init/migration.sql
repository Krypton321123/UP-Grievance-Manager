-- CreateEnum
CREATE TYPE "issueTypes" AS ENUM ('HEALTH', 'FINANCIAL', 'MUNICIPAL', 'EDUCATION', 'ENVIRONMENTAL');

-- CreateEnum
CREATE TYPE "LEVEL" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Pincode" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Grievance" (
    "grievance_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "image" TEXT,
    "type" "issueTypes" NOT NULL,
    "priority" "LEVEL" NOT NULL,
    "admin_id" TEXT NOT NULL,

    CONSTRAINT "Grievance_pkey" PRIMARY KEY ("grievance_id")
);

-- CreateTable
CREATE TABLE "admin" (
    "admin_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "specialisation" "issueTypes"[],

    CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_id")
);

-- AddForeignKey
ALTER TABLE "Grievance" ADD CONSTRAINT "Grievance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grievance" ADD CONSTRAINT "Grievance_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("admin_id") ON DELETE RESTRICT ON UPDATE CASCADE;
