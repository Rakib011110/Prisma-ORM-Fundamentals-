import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published", "authorId"],
    _count: {
      title: true,
    },
    having: {
      // published: true,
      authorId: {
        _min: {
          gt: 1,
        },
      },
    },
  });
  console.log(groupPost);
};
groupBy();
