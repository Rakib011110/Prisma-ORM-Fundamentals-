import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  const manyDelete = await prisma.post.deleteMany({
    where: {
      title: "New title ",
    },
  });
  console.log(manyDelete);
};
deleteData();
