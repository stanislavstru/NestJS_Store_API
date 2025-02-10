-- CreateTable
CREATE TABLE "pre_orders" (
    "id" TEXT NOT NULL,
    "product" JSONB NOT NULL,
    "product_quantity" INTEGER NOT NULL,
    "user_address" TEXT NOT NULL,
    "user_full_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "pre_orders_pkey" PRIMARY KEY ("id")
);
