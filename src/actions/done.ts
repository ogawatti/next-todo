"use server";

import prisma from '@/lib/prisma';

export const done = async (id: bigint) => {
  await prisma.task.update({
    where: { id },
    data: { done: true },
  });
};
