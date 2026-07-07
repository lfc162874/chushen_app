import { prisma } from '../../plugins/prisma.js';

export function findUserProfile(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          recipes: true,
          favorites: true
        }
      }
    }
  });
}

export function updateUser(id: string, data: { nickname?: string; avatar?: string }) {
  return prisma.user.update({
    where: { id },
    data
  });
}
