import customerService from "./customerService";

const PENDING_STATUS = "PENDING";
const ACCEPTED_STATUS = "ACCEPTED";
const CANCELED_STATUS = "CANCELED";

export async function existOrFail({ orderId }) {
  const orderExists = await prisma.$exists.order({ id: orderId });

  if (!orderExists) {
    throw new Error("Order does not exist.");
  }

  return true;
}

export async function getOrdersByCustomerId({ customerId }) {
  // More logic...

  await customerService.existOrFail({ customerId });

  return await prisma.orders({ customerId });
}

export async function create({ customerId, amount, currency }) {
  // More logic...

  await customerService.existOrFail({ customerId });

  return await prisma.createOrder({
    customerId,
    status: PENDING_STATUS,
    amount,
    currency
  });
}

export async function acceptOrder({ orderId }) {
  // More logic...

  await existOrFail({ orderId });

  const updatedOrder = await prisma.updateOrder({
    data: { status: ACCEPTED_STATUS },
    where: { id: orderId }
  });

  return updatedOrder;
}

export async function cancelOrder({ orderId }) {
  // More logic...

  await existOrFail({ orderId });

  const updatedOrder = await prisma.updateOrder({
    data: { status: CANCELED_STATUS },
    where: { id: orderId }
  });

  return updatedOrder;
}
