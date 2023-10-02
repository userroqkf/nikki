import pool from "db";

export async function getPostComments(postId: string) {
  const comments = await pool.query(`
  SELECT * 
  FROM (
    SELECT * FROM comments WHERE post_id = $1
  ) AS comment 
  JOIN users ON owner_id = users.id
  `, [postId])
  const res = comments.rows.map((comment, index) => {
    const {id, text, date, first_name, last_name, username, profile_picture} = comment;
    return (
      {
        profilePictureURL: "",
        fullName: first_name + " " + last_name,
        username: username,
        content: {
          datePosted: "",
          text: text
        } 
      }
    )
  })
  return res
}