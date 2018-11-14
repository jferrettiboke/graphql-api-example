import customerService from "../apis/customerService";

export default {
  Query: {},

  Mutation: {
    async createCustomer(
      root,
      {
        input: { name }
      },
      context,
      info
    ) {
      return await customerService.create({ name });
    },

    async updateCustomer(
      root,
      {
        input: { customerId, name }
      },
      context,
      info
    ) {
      return await customerService.update({ customerId, name });
    }
  }
};
