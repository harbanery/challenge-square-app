import db from "../configs/database.js";

export const dropTables = async () => {
  try {
    db.query(`SET FOREIGN_KEY_CHECKS = 0;`);

    db.query(`DROP TABLE IF EXISTS Transaction;`);
    db.query(`DROP TABLE IF EXISTS Product;`);
    db.query(`DROP TABLE IF EXISTS Customer;`);

    db.query(`SET FOREIGN_KEY_CHECKS = 1;`);

    console.log("All tables dropped successfully");
  } catch (err) {
    console.error("Error dropping tables:", err);
  }
};

export const createTables = async () => {
  try {
    db.query(`
      CREATE TABLE IF NOT EXISTS Customer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        level ENUM('Warga', 'Juragan', 'Sultan', 'Konglomerat') DEFAULT 'Warga',
        total_transaction DECIMAL(10, 2) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted TINYINT(1) DEFAULT 0
      );
    `);

    db.query(`
      CREATE TABLE IF NOT EXISTS Product (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) DEFAULT 0,
        stock INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.query(`
      CREATE TABLE IF NOT EXISTS Transaction (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        product_id INT,
        quantity INT NOT NULL,
        total_price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (customer_id) REFERENCES Customer(id),
        FOREIGN KEY (product_id) REFERENCES Product(id)
      );
    `);

    console.log("Tables created successfully");
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    db.end();
  }
};

const migrate = async () => {
  await dropTables();
  await createTables();
};

migrate();
