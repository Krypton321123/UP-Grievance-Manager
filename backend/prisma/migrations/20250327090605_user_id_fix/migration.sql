-- DropForeignKey
ALTER TABLE "Grievance" DROP CONSTRAINT "Grievance_user_id_fkey";

-- AlterTable
ALTER TABLE "Grievance" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Grievance" ADD CONSTRAINT "Grievance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
