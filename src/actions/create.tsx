"use server";

import prisma from '@/lib/prisma';

export const create = async (formData: FormData) => {
  const content = formData.get('content') as string;

  if (!content) return;

  await prisma.task.create({
    data: { content }
  });
};
