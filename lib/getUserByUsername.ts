import pool from "db";

export async function getUserByUsername(username: string) {
  
  const userData = await pool.query(`
    SELECT *
    FROM users
    WHERE username = $1
  `, [username])
  return userData.rows[0]
}