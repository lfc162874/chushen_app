import { prisma } from '../../plugins/prisma.js';

export function findUserByOpenId(openid: string) {
  return prisma.user.findUnique({
    where: { openid }
  });
}

export function createUser(data: { nickname?: string; openid?: string }) {
  return prisma.user.create({
    data
  });
}
