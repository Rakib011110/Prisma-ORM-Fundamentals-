import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationShorting = async () => {
  const offesetData = await prisma.post.findMany({
    skip: 5,
    take: 1,
  });

  console.log(offesetData);
};
paginationShorting();
