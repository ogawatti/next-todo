import { Task } from "@prisma/client";

const range = (length: number) => {
  return Array.from({length}, (_v, k) => k);
};

export const testTasks: Task[] = [
  ...range(3).map((_v, i) => {
    const n = i + 1;
    return {
      id: BigInt(n),
      content: `Task ${n}`,
      done: false,
      userId: "1234567890",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  })
];
