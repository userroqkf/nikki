import pool from "db";

type followingPostType = {
  follower: number;
  following: number;
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string;
  text: string;
  image: string;
  date_created: string;
  owner_id: string;
  comments_count: string;
  likes_count: string;
  user_liked_post: true;
}

export async function getFollowingPosts(userId: string): Promise<Array<followingPostType>>{
  
  const postsData = await pool.query(`
    SELECT *,
    (SELECT COUNT(*) FROM comments WHERE comments.post_id = posts.id) AS comments_count,
    (SELECT COUNT(*) FROM likes WHERE likes.post_id = posts.id) AS likes_count,
    EXISTS (
      SELECT 1
      FROM likes
      WHERE likes.owner_id = $1
        AND likes.post_id = posts.id
    ) AS user_liked_post
    FROM follow
    JOIN users ON follow.following = users.id
    JOIN posts ON follow.following = posts.owner_id
    WHERE follow.follower = $1 OR posts.owner_id = $1
    ORDER BY posts.date_created DESC;
    `, [userId]
    )
  
    return postsData.rows
}