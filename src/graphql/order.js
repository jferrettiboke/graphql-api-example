import orderService from "../apis/orderService";
import emailService from "../apis/emailService";

export default {
  Query: {
    async getCustomerOrders(
      root,
      {
        input: { customerId },
        context,
        info
      }
    ) {
      return await orderService.getOrdersByCustomerId({ customerId });
    }
  },

  Mutation: {
    async createOrder(
      root,
      {
        input: { customerId, amount, currency }
      },
      context,
      info
    ) {
      const createdOrder = await orderService.create({
        customerId,
        amount,
        currency
      });

      await emailService.send({
        from: "acme@domain.com",
        to: "someone@domain.com",
        subject: `Order #${acceptedOrder.id} has been created.`,
        body: "Your order is pending to be accepted."
      });

      return createdOrder;
    },

    async acceptOrder(
      root,
      {
        input: { orderId }
      },
      context,
      info
    ) {
      const acceptedOrder = await orderService.acceptOrder({ orderId });

      await emailService.send({
        from: "acme@domain.com",
        to: "someone@domain.com",
        subject: `Order #${acceptedOrder.id} has been accepted.`,
        body: "Your order is on its way."
      });

      return acceptedOrder;
    }
  }
};
