import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "this is new title",
          },
        },

        {
          published: true,
        },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        { title: "this is new title" },

        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "r", // contains, endWith, equls
      },
    },
  });

  const userArray = ["rakib1", "user2", "user3"];

  const userNameByArray = await prisma.user.findMany({
    where: {
      userName: {
        in: userArray,
      },
    },
  });

  const indepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      Post: {
        include: {
          postCategory: {
            include: {
              catergory: true,
            },
          },
        },
      },
    },
  });

  console.log(indepthData);
};

filtering();
