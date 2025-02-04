import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.user.upsert({
    where: { name: 'Alice' },
    update: {},
    create: {
      name: 'Alice',
      password: '12345',
      profiles: {
        create: [
          {
            name: "child1",
            lists: {
              create: [
                {
                  name: "fruits",
                  words: {
                    create: [
                      { value: "apple" },
                      { value: "banana" },
                      { value: "orange" }
                    ]
                  }
                },
                {
                  name: "veggies",
                  words: {
                    create: [
                      { value: "broccoli" },
                      { value: "spinach" },
                    ]
                  }
                }
              ]
            }
          }, {
            name: "child2"
          },
        ]
      },
    }
  })
  const bob = await prisma.user.upsert({
    where: { name: 'bob' },
    update: {},
    create: {
      name: 'Bob',
      password: '12345'
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })