import { PrismaClient } from "@prisma/client";


// Prevent creating multiple instances of Prisma client during development
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // Ensure a single Prisma instance is used in development
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
