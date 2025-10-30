import { PrismaClient } from "@prisma/client";

const gobalForPrisma = globalThis as unknown as {
  prisma: PrismaClient ;
};

export const prisma = gobalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {gobalForPrisma.prisma = prisma};

export default prisma;