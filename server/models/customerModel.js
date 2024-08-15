import db from "../configs/database.js";

const Customer = {
  findAll: () => {
    const queryString = `
      SELECT c.*, 
      (SELECT name 
         FROM Product 
         WHERE id = (
           SELECT product_id 
           FROM Transaction 
           WHERE customer_id = c.id 
           GROUP BY product_id 
           ORDER BY SUM(quantity) DESC 
           LIMIT 1
         )
        ) AS favorite_menu
      FROM Customer c 
      WHERE c.deleted = 0
    `;
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, rows) => {
        if (err) {
          return reject(err);
        }

        const customers = [];
        const customerMap = {};

        rows.forEach((row) => {
          if (!customerMap[row.id]) {
            customerMap[row.id] = {
              id: row.id,
              name: row.name,
              level: row.level,
              favorite_menu: row.favorite_menu,
              total_transaction: row.total_transaction,
              created_at: row.created_at,
              deleted: row.deleted,
            };
            customers.push(customerMap[row.id]);
          }
        });

        resolve(customers);
      });
    });
  },

  findById: (id) => {
    const queryString = `
      SELECT 
        c.*,
        p.id as product_id, 
        p.name as product_name, 
        SUM(t.quantity) as total_quantity,
        (SELECT name 
         FROM Product 
         WHERE id = (
           SELECT product_id 
           FROM Transaction 
           WHERE customer_id = ? 
           GROUP BY product_id 
           ORDER BY SUM(quantity) DESC 
           LIMIT 1
         )
        ) AS favorite_menu
      FROM Customer c 
      LEFT JOIN Transaction t ON c.id = t.customer_id 
      LEFT JOIN Product p ON t.product_id = p.id 
      WHERE c.id = ? AND c.deleted = 0
      GROUP BY p.id;
    `;

    return new Promise((resolve, reject) => {
      db.query(queryString, [id, id], (err, rows) => {
        if (err) {
          return reject(err);
        }

        if (rows.length > 0) {
          const customer = {
            id: rows[0].id,
            name: rows[0].name,
            level: rows[0].level,
            favorite_menu: rows[0].favorite_menu,
            total_transaction: rows[0].total_transaction,
            created_at: rows[0].created_at,
            deleted: rows[0].deleted,
            products: [],
          };

          const productMap = {};

          rows.forEach((row) => {
            if (row.product_name && row.total_quantity) {
              if (productMap[row.product_name]) {
                productMap[row.product_name].quantity += row.total_quantity;
              } else {
                productMap[row.product_name] = {
                  id: row.product_id,
                  name: row.product_name,
                  quantity: row.total_quantity,
                };
              }
            }
          });

          if (productMap) {
            customer.products = Object.values(productMap);
          }

          resolve(customer);
        } else {
          resolve({});
        }
      });
    });
  },

  create: (data) => {
    const queryString = `
      INSERT INTO Customer (name, level, total_transaction) 
      VALUES (?, ?, ?)
    `;
    return db.query(queryString, [
      data.name,
      data.level,
      data.total_transaction,
    ]);
  },

  edit: (id, data) => {
    const queryString = `
      UPDATE Customer 
      SET name = ?, level = ? WHERE id = ?
    `;
    return db.query(queryString, [data.name, data.level, id]);
  },

  editTransactionTotal: (customerId, totalAmount) => {
    const queryString = `
      UPDATE Customer 
      SET total_transaction = total_transaction + ? 
      WHERE id = ?
    `;
    return db.query(queryString, [totalAmount, customerId]);
  },

  softDelete: (id) => {
    const queryString = `
      UPDATE Customer 
      SET deleted = 1 
      WHERE id = ?
    `;
    return db.query(queryString, [id]);
  },
};

export default Customer;
