import db from "../configs/database.js";

const Transaction = {
  create: (data) => {
    const queryString = `
      INSERT INTO Transaction (customer_id, product_id, quantity, total_price) 
      VALUES (?, ?, ?, ?)
    `;
    return db.query(queryString, [
      data.customer_id,
      data.product_id,
      data.quantity,
      data.total_price,
    ]);
  },

  findById: (id) => {
    const queryString = `
      SELECT id, quantity, total_price 
      FROM Transaction 
      WHERE id = ?
    `;
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, rows) => {
        if (err) {
          return reject(err);
        }

        if (rows.length > 0) {
          const transaction = {
            id: rows[0].id,
            quantity: rows[0].quantity,
            total_price: rows[0].total_price,
          };
          resolve(transaction);
        } else {
          resolve({});
        }
      });
    });
  },

  findByCustomerProduct: (customerId, productId) => {
    const queryString = `
      SELECT id, quantity, total_price 
      FROM Transaction 
      WHERE customer_id = ? 
      AND product_id = ? 
    `;
    return new Promise((resolve, reject) => {
      db.query(queryString, [customerId, productId], (err, rows) => {
        if (err) {
          return reject(err);
        }

        if (rows.length > 0) {
          const transaction = {
            id: rows[0].id,
            quantity: rows[0].quantity,
            total_price: rows[0].total_price,
          };
          resolve(transaction);
        } else {
          resolve({});
        }
      });
    });
  },

  edit: (id, quantity, total_price) => {
    const queryString = `UPDATE Transaction 
      SET quantity = ?, total_price = ? 
      WHERE id = ?
      `;
    return db.query(queryString, [quantity, total_price, id]);
  },

  delete: (id) => {
    const queryString = `DELETE FROM Transaction WHERE id = ?`;
    return db.query(queryString, [id]);
  },
};

export default Transaction;
