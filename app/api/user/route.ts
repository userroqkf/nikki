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