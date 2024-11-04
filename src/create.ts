import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     userName: "rakib2",
  //     email: "rakib2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: " This is my my new bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "this is title",
      content: "this is new content",
      authorId: 1,
      postCategory: {
        create: {
          catergory: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

main();
