import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const roundsOfHashing = 10;
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      name: 'John',
      email: 'john@example.com',
      password: password,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'david@example.com' },
    update: {},
    create: {
      name: 'David',
      email: 'david@example.com',
      password: 'password',
    },
  });
  console.log({ user1, user2 });
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
});