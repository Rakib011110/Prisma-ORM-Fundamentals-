import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 11,
  //     },
  //     data: {
  //       title: "Understanding RDBMS",
  //       authorName: " Saidya Islam",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "this is tile",
  //     },
  //     data: {
  //       title: "New title ",
  //     },
  //   });

  const upserData = await prisma.post.upsert({
    where: {
      id: 13,
    },
    update: {
      authorName: "Rakib",
    },
    create: {
      title: "new added by upser",
      content: "new content added ",
      authorName: "sadiya islam",
    },
  });

  console.log(upserData);
};

updates();
