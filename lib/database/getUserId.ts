import pool from "db";

export async function getUserId(username: string) {
  const userId = await pool.query(`
    SELECT id
    FROM users
    WHERE username = $1
  `, [username])
  
  return userId.rows[0]
}