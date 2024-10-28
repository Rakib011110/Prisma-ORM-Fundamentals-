import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "this is tile",
  //       content: "this content",
  //       authorName: "Ariyan Rakib",
  //     },
  //   });
  const getALlFromDb = await prisma.post.findMany();
  console.log(getALlFromDb);
};

main();
