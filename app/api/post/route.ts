import pool from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const {userId, imageId, text} = await req.json();
  const dateCreated = new Date()
  try {
    const postData = await pool.query(
      `INSERT INTO posts(text, image, date_created, owner_id)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *`
    , [text, imageId, dateCreated, userId])
    return NextResponse.json(postData)
  } catch(err) {
    return NextResponse.json(err)
  }
}