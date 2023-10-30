import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import pool from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const s3Region = process.env.AWS_S3_REGION;
const s3SecretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;
const s3AccessKeyId = process.env.AWS_S3_ACCESS_KEY_ID;
const s3BucketName = process.env.AWS_S3_BUCKET_NAME;
const s3EndPoint= process.env.AWS_S3_ENDPOINT

const client = new S3Client({
  region: s3Region as string,
  credentials: {
    accessKeyId: s3AccessKeyId as string,
    secretAccessKey: s3SecretAccessKey as string,
  },
});

export async function POST(req: Request, res: NextApiResponse) {
  const {userId, imageId, postText} = await req.json();
  const dateCreated = new Date()
  try {
    const postData = await pool.query(
      `INSERT INTO posts(text, image, date_created, owner_id)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *`
    , [postText, imageId, dateCreated, userId])
    return NextResponse.json(postData.rows[0])
  } catch(err) {
    return NextResponse.json({message: `there is an ${err}`})
  }
}

export async function PUT(req: Request, res: NextApiResponse) {
  const {postId, imageURL, editedText} = await req.json();
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
    return NextResponse.json({message: `there is an ${err}`})
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const {postId} = await req.json();

  const postRes= await pool.query(`
    SELECT *
    FROM posts
    WHERE id = $1
  `, [postId])

  const image = postRes.rows[0].image
  const command = new DeleteObjectCommand({
    Bucket: s3BucketName,
    Key: image,
  }

  )
  try {
    if (image) {
      await client.send(command)
    }
    await pool.query(`
      DELETE FROM posts
      WHERE id = $1
    `, [postId])
    return NextResponse.json({message: "post deleted"})
  } catch(err) {
    return NextResponse.json({err})
  }
}