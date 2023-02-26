-- CreateTable
CREATE TABLE "Anouncement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "vehicle_type" TEXT NOT NULL,
    "ad_type" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "cover_img" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anouncement_pkey" PRIMARY KEY ("id")
);
