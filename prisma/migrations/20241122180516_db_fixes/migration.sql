/*
  Warnings:

  - Made the column `content` on table `Note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DEFAULT '';
