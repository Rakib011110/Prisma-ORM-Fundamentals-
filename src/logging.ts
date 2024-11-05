import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e.duration, e.query);
});

const main = async () => {
  const getALlFromDb = await prisma.post.findMany();
  //   console.log(getALlFromDb);
};

main();
