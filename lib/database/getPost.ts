import pool from "db";

type postType = {
  postid: number;
  text: string;
  image: string;
  date_created: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string;
  comments_count: string;
  likes_count: string;
}

export async function getPost(postId: string): Promise<postType> {
  const postData = await pool.query(`
  SELECT post.id as postId, *,
    (SELECT COUNT(*) FROM comments WHERE post_id = $1) AS comments_count,
    (SELECT COUNT(*) FROM likes WHERE post_id = $1) AS likes_count
  FROM (
    SELECT * FROM posts WHERE id = $1
  ) AS post
    JOIN users ON users.id = post.owner_id
  `, [postId])

  return postData.rows[0]
}