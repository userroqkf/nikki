import pool from "db";
import { getUserId } from "./getUserId";

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

export async function getFeedPosts(currUser: string, feedUser: string): Promise<Array<feedPostsType>> {
  const currUserId = await getUserId(currUser)
  const feedUserId = await getUserId(feedUser)

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
  `, [currUserId.id, feedUserId.id])

  return feedPosts.rows
}