import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationShorting = async () => {
  const offesetData = await prisma.post.findMany({
    skip: 5,
    take: 1,
  });
  const coursorData = await prisma.post.findMany({
    skip: 5,
    take: 1,
    cursor: {
      id: 11,
    },
  });

  const sortingData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
    where: {
      title: "Working with Schemas",
    },
  });
};
paginationShorting();
