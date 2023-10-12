import pool from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  console.log("sent here check")
  const {userId, imageId, postText} = await req.json();
  const dateCreated = new Date()
  console.log("date created check" ,dateCreated);
  try {
    const postData = await pool.query(
      `INSERT INTO posts(text, image, date_created, owner_id)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *`
    , [postText, imageId, dateCreated, userId])
    return NextResponse.json(postData.rows[0])
  } catch(err) {
    console.log(err);
    return NextResponse.json({message: `there is an ${err}`})
  }
}

export async function PUT(req: Request, res: NextApiResponse) {
  const {postId, imageURL, editedText} = await req.json();
  console.log("postId",postId, "imageURL", imageURL, "editedText",editedText);
  try {
    const modifyData = await pool.query(
      `UPDATE posts
        SET text = $1,
            image = $2
        WHERE id = $3
        RETURNING *`
    , [editedText, imageURL, postId])
    return NextResponse.json(modifyData.rows[0])
  } catch(err) {
    console.log(err);
    return NextResponse.json({message: `there is an ${err}`})
  }
}