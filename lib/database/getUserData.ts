import pool from "db";

export async function getUserData(userId: number) {
  const userData = await pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
  `, [userId])

  return userData.rows[0]
}