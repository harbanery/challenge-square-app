import db from "../configs/database.js";

const Product = {
  findById: (id) => {
    const queryString = `
      SELECT * 
      FROM Product 
      WHERE id = ?
    `;
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  },

  updateStock: (id, quantity) => {
    const queryString = `
      UPDATE Product 
      SET stock = stock - ? 
      WHERE id = ?
    `;
    return db.query(queryString, [quantity, id]);
  },
};

export default Product;
