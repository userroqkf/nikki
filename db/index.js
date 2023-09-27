import { Pool } from "pg";

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DBL_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });

export default pool;