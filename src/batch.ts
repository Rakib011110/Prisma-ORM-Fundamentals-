import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// console.log(createUser);
const bacthTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      userName: "Rakib3",
      email: "rakib3233@gamil.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      age: 29,
    },
  });

  const [userdata, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(updateData, updateData);
};
bacthTransaction();
