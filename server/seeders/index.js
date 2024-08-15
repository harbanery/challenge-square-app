import db from "../configs/database.js";

export const seed = async () => {
  try {
    db.query(`
      INSERT INTO Product (name, price, stock) VALUES
      ('Chicken & Ribs Combo', 50000, 50),
      ('Surf & Turf Gift Basket', 65000, 40),
      ('Fried Chicken Dinner', 67000, 30),
      ('BBQ Rib Dinner', 75000, 20),
      ('Beef Monster Patty', 63000, 10),
      ('Dark & Stormy', 63500, 25),
      ('Shaking Beef Tri-Tip', 64000, 35),
      ('Surf & Turf Gift Basket', 74500, 45),
      ('BBQ Rib Dinner', 85000, 15),
      ('Beef Monster Patty', 75500, 5);
    `);

    console.log("Products seeded successfully");
  } catch (err) {
    console.error("Error seeding products:", err);
  } finally {
    db.end();
  }
};

seed();
