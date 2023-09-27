// db.test.js
import pool from "../../db/index";

describe('PostgreSQL DB Connection', () => {
  afterAll(() => {
    // Close the database pool after all tests
    pool.end();
  });

  it('should establish a successful PostgreSQL DB connection', async () => {
    const client = await pool.connect();
    expect(client).toBeTruthy(); // Check if the client is defined (connection successful)
    client.release(); // Release the client back to the pool
  });

  it('should execute a simple query', async () => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM users');
      expect(result.rows.length).toBe(3);
    } finally {
      client.release();
    }
  });
});
