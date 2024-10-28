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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Exploring PostgreSQL Basics",
        content:
          "An introduction to fundamental concepts in PostgreSQL, including tables, schemas, and indexing.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Understanding Relational Databases",
        content:
          "A guide to understanding the structure and benefits of relational databases in data management.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Optimizing Queries with Indexing",
        content:
          "Learn how indexing works to improve query performance and best practices for using indexes.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Advanced PostgreSQL Joins",
        content:
          "A deep dive into using different types of joins in PostgreSQL to manage complex data relationships.",
        authorName: "Ariyan Rakib",
      },
    ],
  });
  console.log(createMany);
};

main();
