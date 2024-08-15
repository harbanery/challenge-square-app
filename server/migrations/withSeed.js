import { seed } from "../seeders/index.js";
import { createTables, dropTables } from "./index.js";

const migrateWithSeed = async () => {
  await dropTables();
  await createTables();
  await seed();
};

migrateWithSeed();
