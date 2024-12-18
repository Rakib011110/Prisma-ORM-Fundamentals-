````markdown
# Prisma Quickstart and Commands Guide

## 1. Setup and Installation

First, initialize a new Prisma project:

```bash
npx prisma init
```
````

This command will create a `prisma` folder with a `schema.prisma` file to define your models and configure the database.

To install Prisma Client:

```bash
npm install @prisma/client
```

## 2. Common Prisma Commands

The following table summarizes frequently used Prisma CLI commands:

| Command                                | Description                                                      |
| -------------------------------------- | ---------------------------------------------------------------- |
| `npx prisma init`                      | Initializes Prisma by creating a `prisma` folder and schema file |
| `npx prisma generate`                  | Generates Prisma Client based on the schema                      |
| `npx prisma migrate dev --name <name>` | Creates a new migration and updates the database schema          |
| `npx prisma migrate deploy`            | Applies all migrations in production                             |
| `npx prisma migrate reset`             | Resets the database and re-applies migrations                    |
| `npx prisma studio`                    | Opens Prisma Studio, a GUI to view and edit data                 |
| `npx prisma migrate status`            | Shows migration status                                           |
| `npx prisma db pull`                   | Introspects an existing database and updates `schema.prisma`     |
| `npx prisma db push`                   | Pushes the Prisma schema to the database (no migrations)         |
| `npx prisma format`                    | Formats the `schema.prisma` file                                 |

## 3. Prisma CRUD Operations

Below are examples of common database operations using Prisma Client.

### Example Schema: User Model

Define the following model in your `schema.prisma` file:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  age       Int
  createdAt DateTime @default(now())
}
```

Run `npx prisma migrate dev --name init` to create the `User` table.

### Code Examples for CRUD Operations

#### 1. Create a User

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      age: 25,
    },
  });
  console.log(user);
}

createUser();
```

#### 2. Retrieve a List of Users

```typescript
async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

getUsers();
```

#### 3. Update a User

```typescript
async function updateUser() {
  const updatedUser = await prisma.user.update({
    where: { email: "alice@example.com" },
    data: { age: 26 },
  });
  console.log(updatedUser);
}

updateUser();
```

#### 4. Delete a User

```typescript
async function deleteUser() {
  const deletedUser = await prisma.user.delete({
    where: { email: "alice@example.com" },
  });
  console.log(deletedUser);
}

deleteUser();
```

#### 5. Aggregate: Count Users

```typescript
async function countUsers() {
  const count = await prisma.user.count();
  console.log(`Total users: ${count}`);
}

countUsers();
```

#### 6. Additional Filtering and Aggregation

- **Find users with age greater than 20**:

  ```typescript
  const users = await prisma.user.findMany({
    where: { age: { gt: 20 } },
  });
  ```

- **Average age of users**:
  ```typescript
  const avgAge = await prisma.user.aggregate({
    _avg: { age: true },
  });
  console.log(`Average age: ${avgAge._avg.age}`);
  ```

## 4. Running the Application

1. Start by initializing Prisma and generating the client:

   ```bash
   npx prisma generate
   ```

2. Use Node.js to run the example script:

   ```bash
   node <script_name>.js
   ```

3. Access Prisma Studio for a UI to view and edit your data:
   ```bash
   npx prisma studio
   ```

---

This README covers the basics to get you started with Prisma. For advanced operations and further customization, consult the [Prisma Documentation](https://www.prisma.io/docs). Happy coding!

🖥RAKIB💜

```

```
