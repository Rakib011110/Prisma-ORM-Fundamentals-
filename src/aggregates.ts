import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregrates = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // sum of age

  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // count of age
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  // max of age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  // min of age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  const coundData = await prisma.user.count();

  const countPost = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  console.log(countPost);
};
aggregrates();
