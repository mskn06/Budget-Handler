import Service from './service';

class OrderService extends Service {
  constructor(model) {
    super(model);
  }

  async insert(data) {
    try {
      let existingItem = await this.model.find(data);
      // console.log(existingItem.length)
      if (existingItem.length)
        return {
          error: true,
          statusCode: 409,
          existingItem,
        };

        data.expense = 0
        data.earning = 0

        // fiver amount(FA) - 20%(FA)
        data.orderAmount = data.orderAmount - 0.2 * data.orderAmount;

        // expense = amtUsed
        data.staffDetails.forEach((element) => {
          console.log(element)
          data.expense = data.expense + element.toPay;
        });

        // earning = amtEarned
        data.earning = data.orderAmount - data.expense

      let item = await this.model.create(data);
      if (item)
        return {
          error: false,
          item,
        };
    } catch (error) {
      console.log("error", error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors,
      };
    }
  }

};

export default OrderService;



