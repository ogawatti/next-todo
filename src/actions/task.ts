"use server";

import { currentUser } from '@/lib/current-user';
import prisma from '@/lib/prisma';

export const findAll = async () => {
  const user = await currentUser();

  return await prisma.task.findMany({
    where: {
      userId: user.sub,
      done: false
    },
    orderBy: {
      id: 'desc'
    }
  });
};

export const create = async (formData: FormData) => {
  const user = await currentUser();
  const content = formData.get('content') as string;

  if (!content) return;

  return await prisma.task.create({
    data: { content, userId: user.sub }
  });
};

export const done = async (id: bigint) => {
  return await prisma.task.update({
    where: { id },
    data: { done: true },
  });
};
