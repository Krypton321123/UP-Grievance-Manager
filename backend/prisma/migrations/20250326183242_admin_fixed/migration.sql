-- DropForeignKey
ALTER TABLE "Grievance" DROP CONSTRAINT "Grievance_admin_id_fkey";

-- AlterTable
ALTER TABLE "Grievance" ALTER COLUMN "admin_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Grievance" ADD CONSTRAINT "Grievance_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("admin_id") ON DELETE SET NULL ON UPDATE CASCADE;
