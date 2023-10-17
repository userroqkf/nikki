import pool from "db"

export async function checkPostExists(postId: string) {
  if (!parseInt(postId)) {
    return 0
  }

  const posts =  await pool.query(`
    SELECT COUNT(*)
    FROM posts
    WHERE id = $1
  `, [postId])
  
  return posts.rows[0].count
}