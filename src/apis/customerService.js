export async function existOrFail({ customerId }) {
  const customerExists = await prisma.$exists.customer({ id: customerId });

  if (!customerExists) {
    throw new Error("Customer does not exist.");
  }

  return true;
}

export async function create({ name }) {
  // More logic...

  return await prisma.createCustomer({ name });
}

export async function update({ customerId, name }) {
  // More logic...

  await existOrFail({ customerId });

  return await prisma.updateCustomer({
    data: { name },
    where: { id: customerId }
  });
}
