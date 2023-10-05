import pool from "db"

export async function checkUserLikedPost(userId: string, postId: string) {
  if (typeof userId !== "number" || typeof postId !== "number") {
    Error("User or posst does not exist") 
  }
    const userLikedPostQuery = await pool.query(
      `SELECT EXISTS (
        SELECT 1
        FROM likes
        WHERE owner_id = $1
          AND post_id = $2
      ) AS user_liked_post
      `
    , [userId, postId])

    return userLikedPostQuery.rows[0].user_liked_post ? true : false

}