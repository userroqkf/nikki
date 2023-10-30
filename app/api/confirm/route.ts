import pool from "db"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, res: NextResponse) {
  const {username} = await req.json()
    const user = await pool.query(`
      UPDATE users
      SET confirmed = TRUE
      WHERE username = $1
      RETURNING *
    `, [username])
    return NextResponse.json(user)
}