-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "enter_code" TEXT NOT NULL,
    "taken_id" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_taken_id_key" ON "User"("taken_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_taken_id_fkey" FOREIGN KEY ("taken_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
