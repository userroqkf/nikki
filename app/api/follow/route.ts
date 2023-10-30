import pool from "db";
import { getUserId } from "lib/database/getUserId";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json()
    const {currUser, followUser} = data;

    const currUserId = await getUserId(currUser)
    const followUserId = await getUserId(followUser)

    const val = await pool.query(`
      INSERT INTO follow(follower, following)
      VALUES
      ($1, $2)
      RETURNING *
    `, [currUserId.id, followUserId.id])

    return NextResponse.json("done")
  } catch (error) {
    return NextResponse.json(error)
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json()
    const {currUser, followUser} = data;

    const currUserId = await getUserId(currUser)
    const followUserId = await getUserId(followUser)

    const val = await pool.query(`
      DELETE FROM follow
      WHERE follower = $1 AND following = $2;
    `, [currUserId.id, followUserId.id])
    return NextResponse.json("complete")
  } catch (error) {
    return NextResponse.json(error)
  }
}