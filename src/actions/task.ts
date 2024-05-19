"use server";

import prisma from '@/lib/prisma';
import { getUserInfo } from '@/lib/user-info';

export const findAll = async () => {
  const { sub, name, email } = getUserInfo();
  console.log('----------------', sub, name, email);

  return await prisma.task.findMany({
    where: {
      done: false
    },
    orderBy: {
      id: 'desc'
    }
  });
};

export const create = async (formData: FormData) => {
  const content = formData.get('content') as string;

  if (!content) return;

  return await prisma.task.create({
    data: { content }
  });
};

export const done = async (id: bigint) => {
  return await prisma.task.update({
    where: { id },
    data: { done: true },
  });
};
