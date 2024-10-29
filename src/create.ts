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
        title: "Introduction to SQL",
        content:
          "Covers SQL basics and essential commands for data manipulation.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Data Types in PostgreSQL",
        content:
          "Explains the different data types available in PostgreSQL and their uses.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Working with Schemas",
        content:
          "Learn how schemas organize data within a PostgreSQL database.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Primary vs Foreign Keys",
        content:
          "Details the importance of primary and foreign keys in relational databases.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Using Aggregate Functions",
        content:
          "Overview of aggregate functions like COUNT, SUM, and AVG in SQL.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Improving Performance with Indexes",
        content: "Discusses how indexes can optimize database query speeds.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Understanding Table Joins",
        content: "Covers inner, left, and right joins and their applications.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Advanced SQL Queries",
        content: "Examples of complex SQL queries for data analysis.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Managing User Permissions",
        content: "Explains roles and permissions for database security.",
        authorName: "Ariyan Rakib",
      },
      {
        title: "Introduction to Views",
        content: "An overview of views and their advantages in PostgreSQL.",
        authorName: "Ariyan Rakib",
      },
    ],
  });
  console.log(createMany);
};

main();
