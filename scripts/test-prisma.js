// test-prisma.js
import {db} from "../lib/prisma";

async function testPrisma() {
  try {
    const users = await db.user.findMany();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error testing Prisma client:", error);
  }
}

testPrisma();