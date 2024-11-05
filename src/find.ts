import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //  find all

  const getALlFromDb = await prisma.post.findMany();
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      // id: 2,
      published: false,
    },
  });

  const findUniq = await prisma.post.findUnique({
    where: {
      id: 11,
    },
    select: {
      title: true,
      author: true,
    },
  });

  console.log(findUniq);
};

main();
