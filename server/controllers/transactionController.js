import Transaction from "../models/transactionModel.js";
import Customer from "../models/customerModel.js";
import Product from "../models/productModel.js";

const transactionController = {
  createTransaction: async (req, res) => {
    try {
      const { customer_id, product_id, quantity } = req.body;

      const product = await Product.findById(product_id);

      if (!product || product.length === 0)
        return res.status(404).json({ message: "Product not found" });

      if (product[0].stock <= 0)
        return res.status(404).json({ message: "Product is empty" });

      const customer = await Customer.findById(customer_id);

      if (!customer.id)
        return res.status(404).json({ message: "Customer not found" });

      let total_price = product[0].price * quantity;

      const transaction = await Transaction.findByCustomerProduct(
        customer_id,
        product_id
      );
      if (!transaction.id) {
        const transactionData = {
          customer_id,
          product_id,
          quantity,
          total_price,
        };
        Transaction.create(transactionData);
      } else {
        const remaining_total_price = transaction.total_price + total_price;
        const total_quantity = transaction.quantity + quantity;
        Transaction.edit(transaction.id, total_quantity, remaining_total_price);
      }

      Customer.editTransactionTotal(customer_id, total_price);

      Product.updateStock(product_id, quantity);

      res.status(201).json({
        message: "Transaction created successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default transactionController;
