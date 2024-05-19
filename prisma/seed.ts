import { TestUser } from "../src/lib/test-user";
import prisma from "../src/lib/prisma";

const createTestUser = async () => {
  const result = await prisma.user.upsert({
    where: { sub: TestUser.sub },
    update: {},
    create: TestUser,
  });
  console.log(result);

  return result;
}

const createDummyUser = async () => {
  const result = await prisma.user.upsert({
    where: { sub: 'dummy' },
    update: {},
    create: { sub: 'dummy', name: 'dummy', email: 'dummy@exmaple.com' },
  });
  console.log(result);

  return result;
}

const createTasks = async (user: { sub: string }) => {
  const tasks = [
    { id: 1, content: 'test1', userId: user.sub },
    { id: 2, content: 'test2', userId: user.sub },
    { id: 3, content: 'test3', userId: user.sub },
    { id: 4, content: 'test4', done: true, userId: user.sub },
  ];

  const result = await Promise.all(tasks.map((task) => {
    return prisma.task.upsert({
      where: { id: task.id },
      update: {},
      create: task,
    });
  }));
  console.log(result);

  return result;
}

const createTask = async (user: { sub: string }) => {
  const task = { id: 5, content: 'dummy1', userId: user.sub };
  const result = await prisma.task.upsert({
    where: { id: task.id },
    update: {},
    create: task,
  });
  console.log(result);

  return result
};

const main = async () => {
  const testUser = await createTestUser();
  const dummyUser = await createDummyUser();
  await createTasks(testUser);
  await createTask(dummyUser);
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
