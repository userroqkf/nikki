import pool from "db"
import { getUserById } from "lib/database/getUserById"
import { getUserData } from "lib/database/getUserData"
import { getUserByUsername } from "lib/getUserByUsername"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const username = searchParams.get('username')

  console.log("route get", "id", id, "username", username);

  try {
    if (!id && !username) {
      throw Error("Id or username is not defined")
    }
    if (id) {
      const res = await getUserById(id)
      return NextResponse.json(res)
    }

    if (username) {
      const res = await getUserByUsername(username)
      return NextResponse.json(res)
    }
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
