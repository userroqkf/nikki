import pool from "db";

type feedPostsType = {
  id: number;
  text: string;
  image: string;
  date_created: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string;
  comments_count: string;
  likes_count: string;
  user_liked_post: boolean;
}

export async function getFeedPosts(currUserId: number, FeedId: number): Promise<Array<feedPostsType>> {
  const feedPosts = await pool.query(`
  SELECT *,
  (SELECT COUNT(*) FROM comments WHERE comments.post_id = posts.id) AS comments_count,
  (SELECT COUNT(*) FROM likes WHERE likes.post_id = posts.id) AS likes_count,
  EXISTS (
    SELECT 1
    FROM likes
    WHERE likes.owner_id = $1
      AND likes.post_id = posts.id
  ) AS user_liked_post
  FROM users
  JOIN posts ON users.id = posts.owner_id
  WHERE users.id = $2
  `, [currUserId, FeedId])

  return feedPosts.rows
}