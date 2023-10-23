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
  const {userId, postId, commentText} = await req.json();
  console.log(userId, postId, commentText);
  const dateCreated = new Date()
  try {
    const postData = await pool.query(
      `INSERT INTO comments(owner_id, post_id, text, date)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *`
    , [userId, postId, commentText, dateCreated])
    return NextResponse.json(postData.rows[0])
  } catch(err) {
    return NextResponse.json({message: `there is an ${err}`})
  }
}