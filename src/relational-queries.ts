import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
      //  include: {
      //    Post: true,
      //  },
    })
    .profile();
  //  .Post();

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};
relationalQueries();
