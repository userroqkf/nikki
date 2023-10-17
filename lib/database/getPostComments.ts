import pool from "db";
import { formatDateFromNow, getImageURL } from "utils/helperFunctions";

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
    const profilePictureURL = getImageURL(profile_picture);
    return (
      {
        profilePictureURL: profilePictureURL as string,
        fullName: first_name + " " + last_name,
        username: username,
        content: {
          datePosted: formatDateFromNow(new Date(date)),
          text: text
        } 
      }
    )
  })
  return res
}