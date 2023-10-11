import pool from "db";

export async function getUserById(id: string | number) {
  
  const userData = await pool.query(`
    SELECT *
    FROM users
    WHERE id = $1
  `, [id])

  console.log(userData.rows[0]);
  return userData.rows[0]
}