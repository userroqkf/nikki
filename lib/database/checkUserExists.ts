import pool from "db"

export async function checkUserExists(username: string) {
  const users =  await pool.query(`
    SELECT COUNT(*)
    FROM users
    WHERE username = $1 AND confirmed = true
  `, [username])
  
  return users.rows[0].count
}