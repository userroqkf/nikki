import pool from "db";

export async function getFollowingLists(userId: string) {
  const followingList = await pool.query(`
    SELECT *
    FROM users
    JOIN follow ON users.id = following
    WHERE follower = $1
  `, [userId])
  
  return followingList.rows
}