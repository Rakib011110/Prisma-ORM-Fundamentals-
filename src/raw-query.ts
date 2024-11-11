import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const post = await prisma.$queryRaw` SELECT * FROM "posts" WHERE true`;
  //   console.log(post);
  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
};
rawQuery();

//! prisma command
// * npx prisma validate ---for checking validation
