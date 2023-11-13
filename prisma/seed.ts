import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.customer.create({
    data: {
      name: 'Alice',
      age: 30,
      city: 'Tokyo',
      role: 'USER',
      customerPreference: { create: { delivery: true } },
    },
  });

  const bob = await prisma.customer.create({
    data: {
      name: 'Bob',
      age: 35,
      city: 'Odessa',
      role: 'ADMIN',
    },
  });

  const order1 = await prisma.order.create({
    data: {
      customerId: alice.id,
      products: {
        create: [
          {
            name: 'TV',
            brand: 'LG',
            price: '100',
            type: 'APPLIANCES',
          },
          {
            name: 'IPhone14',
            brand: 'Apple',
            price: '200',
            type: 'APPLIANCES',
          },
        ],
      },
    },
  });

  const order2 = await prisma.order.create({
    data: {
      customerId: alice.id,
      products: {
        create: [
          {
            name: 'Playstation',
            brand: 'Sony',
            price: '2200',
            type: 'APPLIANCES',
          },
          {
            name: 'Monitor',
            brand: 'Apple',
            price: '5400',
            type: 'APPLIANCES',
          },
          {
            name: 'IPhone15',
            brand: 'Apple',
            price: '200',
            type: 'APPLIANCES',
          },
        ],
      },
    },
  });

  const order3 = await prisma.order.create({
    data: {
      customerId: bob.id,
      products: {
        create: [
          {
            name: 'T-shirt',
            brand: 'Nike',
            price: '500',
            type: 'CLOTHING',
          },
          {
            name: 'Trousers',
            brand: 'Adidas',
            price: '200',
            type: 'CLOTHING',
          },
        ],
      },
    },
  });

  console.log({ alice, bob, order1, order2, order3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
