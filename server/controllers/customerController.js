import Customer from "../models/customerModel.js";
import Product from "../models/productModel.js";
import Transaction from "../models/transactionModel.js";

const customerController = {
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCustomerDetails: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Customer.findById(id);

      if (!result || result.length === 0)
        return res.status(404).json({ message: "Customer not found" });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCustomer: (req, res) => {
    try {
      const { name, level } = req.body;

      if (!name) return res.status(404).json({ message: "Name is null" });

      const newCustomer = {
        name,
        level: level || "Warga",
        total_transaction: 0,
      };
      Customer.create(newCustomer);
      res.status(201).json({ message: "Customer created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, level } = req.body;

      if (!name) return res.status(404).json({ message: "Name is null" });

      const result = await Customer.findById(id);

      if (!result || result.length === 0)
        return res.status(404).json({ message: "Customer not found" });

      console.log(result[0].level);

      const updatedCustomer = {
        name,
        level: level || result[0].level,
      };

      Customer.edit(id, updatedCustomer);
      res.status(200).json({
        message: "Product quantity updated successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProductQuantity: async (req, res) => {
    try {
      const { customerId, productId } = req.params;
      const { quantity } = req.body;

      const product = await Product.findById(productId);

      if (!product || product.length === 0)
        return res.status(404).json({ message: "Product not found" });

      if (product[0].stock <= 0)
        return res.status(404).json({ message: "Product is empty" });

      const transaction = await Transaction.findByCustomerProduct(
        customerId,
        productId
      );

      if (!transaction.id)
        return res.status(404).json({ message: "Transaction not found" });

      const affected_quantity = quantity - transaction.quantity;
      const affected_price = product[0].price * affected_quantity;
      const remaining_total_price = transaction.total_price + affected_price;

      if (quantity === 0) {
        Transaction.delete(transaction.id);
      } else {
        Transaction.edit(transaction.id, quantity, remaining_total_price);
      }

      Customer.editTransactionTotal(customerId, affected_price);

      Product.updateStock(productId, affected_quantity);

      res.status(200).json({
        message: "Product quantity updated successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  softDeleteCustomer: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Customer.findById(id);

      if (!result || result.length === 0)
        return res.status(404).json({ message: "Customer not found" });

      Customer.softDelete(id);
      res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateTransactionTotal: (req, res) => {
    try {
      const { customerId } = req.params;
      const { totalAmount } = req.body;

      Customer.editTransactionTotal(customerId, totalAmount);
      res.status(200).json({
        message: "Total transaction updated successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default customerController;
