import { getUserInfo } from "./user-info";

export const currentUser = async () => {
  const { sub, name, email } = getUserInfo();

  if (!sub || !name || !email) return null;

  const user = await prisma.user.findUnique({
    where: { sub }
  })

  if (user) {
    if (user.sub !== sub || user.name !== name || user.email !== email) {
      return await prisma.user.update({
        where: { id: user.id },
        data: { sub, name, email }
      })
    } else {
      return user;
    }
  } else {
    return await prisma.user.create({
      data: { sub, name, email }
    });
  }
}
