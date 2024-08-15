import { Router } from "express";
import customerController from "../controllers/customerController.js";
import transactionController from "../controllers/transactionController.js";

const router = Router();

router.get("/customers", customerController.getAllCustomers);
router.post("/customers", customerController.createCustomer);
router.get("/customers/:id", customerController.getCustomerDetails);
router.put("/customers/:id", customerController.updateCustomer);
router.put(
  "/customers/:customerId/products/:productId",
  customerController.updateProductQuantity
);
router.delete("/customers/:id", customerController.softDeleteCustomer);

router.post("/transactions", transactionController.createTransaction);

export default router;
