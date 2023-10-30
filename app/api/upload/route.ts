import { PutObjectCommand,GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

export async function POST(request: NextRequest, response: NextResponse) {
    const request_data = await request.formData();
    const file = request_data.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }
    //create unique key for object and send that key as a response to client
    const id = crypto.randomUUID();
    const buffer = Buffer.from(await file.arrayBuffer());
    const command = new PutObjectCommand({
      Bucket: s3BucketName,
      Key: id,
      Body: buffer,
    });
      
    try {
      await client.send(command);
      return NextResponse.json({id})
    } catch (err) {
      return NextResponse.json(err)
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    try {
      // Attempt to parse the URL from req.url
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');
      const command = new GetObjectCommand({
        Bucket: s3BucketName,
        Key: id as string,
      });
      const src = await getSignedUrl(client, command, { expiresIn: 3600 });
      return NextResponse.json(src);
    } catch (error) {
      return NextResponse.json(error);
    }
  }

// export const config = {
//   api: {
//       bodyParser: false,
//   },
// };