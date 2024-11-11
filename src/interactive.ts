import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const getAllpost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    // query 2
    const countUser = await transactionClient.user.count();

    const updateUser = await transactionClient.user.update({
      where: {
        id: 4,
      },
      data: {
        age: 40,
      },
    });

    return {
      getAllpost,
      countUser,

      updateUser,
    };
  });

  console.log(result);
};
interactiveTransaction();
