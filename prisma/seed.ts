import prisma from "../src/lib/prisma";

async function main() {
  const tasks = [
    { id: 1, content: "test1" },
    { id: 2, content: "test2" },
    { id: 3, content: "test3" },
    { id: 4, content: "test4", done: true },
  ];

  const result = await Promise.all(tasks.map((task) => {
    return prisma.task.upsert({
      where: { id: task.id },
      update: {},
      create: task,
    });
  }));

  console.log(result);
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
