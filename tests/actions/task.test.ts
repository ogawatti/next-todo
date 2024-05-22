import { create, done, findAll } from "@/actions/task";
import { TestUser } from "@/lib/test-user";
import { prismaMock } from "../singleton";
import { Task } from "@prisma/client";

const currentUser = jest.fn();
jest.mock('../../src/lib/current-user', () => ({ currentUser: () => currentUser() }));

describe('Task', () => {
  const content = 'test';
  const task: Task = {
    id: BigInt(1),
    content,
    userId: TestUser.sub,
    done: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  beforeEach(() => {
    currentUser.mockResolvedValue(TestUser);
  });

  describe('findAll', () => {
    const tasks: Task[] = [];

    beforeEach(() => {
      prismaMock.task.findMany.mockResolvedValue(tasks);
    })

    it('calls prisma task findMany', async () => {
      const result = await findAll();

      expect(result).toEqual(tasks);
      expect(prismaMock.task.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('create', () => {
    const formData = new FormData();
    formData.append('content', content);

    beforeEach(() => {
      prismaMock.task.create.mockResolvedValue(task);
    })

    it('calls prisma task create', async () => {
      const result = await create(formData);

      expect(result).toEqual(task);
      expect(prismaMock.task.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('done', () => {
    const updatedTask: Task = { ...task, done: true };
 
    beforeEach(() => {
      prismaMock.task.update.mockResolvedValue(updatedTask);
    })

    it('calls prisma task update', async () => {
      const result = await done(task.id);

      expect(result).toEqual(updatedTask);
      expect(prismaMock.task.update).toHaveBeenCalledTimes(1);
    });
  });
});
