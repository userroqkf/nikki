import pool from "db"
import { getUserById } from "lib/database/getUserById"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  try {
    if (!id) {
      throw Error("Id is not defined")
    }
    const res = await getUserById(id)
    return NextResponse.json(res)
  } catch(err) {
    return NextResponse.json(err)
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const {profilePictureURL, backgroundImageURL, username} = await req.json()
  if (profilePictureURL) {
    const res = await pool.query(`
      UPDATE users
      SET profile_picture = $1
      WHERE username = $2
      RETURNING *
    `, [profilePictureURL, username])
    return NextResponse.json(res) 
  }
  if (backgroundImageURL) {
    const res = await pool.query(`
      UPDATE users
      SET background_picture = $1
      WHERE username = $2
      RETURNING *
    `, [backgroundImageURL, username])
    return NextResponse.json(res)
  }
}
