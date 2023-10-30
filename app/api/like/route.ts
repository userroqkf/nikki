import pool from "db";
import { getUserId } from "lib/database/getUserId";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json()
    const {currUser, postId} = data;

    const currUserId = await getUserId(currUser)

    const val = await pool.query(`
      INSERT INTO likes(owner_id, post_id)
      VALUES
      ($1, $2)
      RETURNING *
    `, [currUserId.id, postId])

    return NextResponse.json("done")
  } catch (error) {
    return NextResponse.json(error)
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json()
    const {currUser, postId} = data;

    const currUserId = await getUserId(currUser)

    const val = await pool.query(`
      DELETE FROM likes
      WHERE owner_id = $1 AND post_id = $2;
    `, [currUserId.id, postId])
    return NextResponse.json("complete")
  } catch (error) {
    return NextResponse.json(error)
  }
}