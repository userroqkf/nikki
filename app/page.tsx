import HomePageLayout from "./_components/HomePageLayout";
import pool from "../db/index";


type postDataType = {
  profilePictureURL: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number;
    liked: boolean;
  },
  fullName: string;
  username: string;
}

async function getData(){
  const postsData = await pool.query('SELECT * FROM posts JOIN users ON users.id = owner_id')
  const res = postsData.rows.map(post => {
    const {text, image, date_created, first_name, last_name, username, profile_picture} = post
    return (
      {
        profilePictureURL: "",
        fullName: first_name + ' ' + last_name,
        username: username,
        content: {
          text: text,
          datePosted: "time ago test",
          likeCount: 2,
          commentCount: 3,
          liked: true,
        },
      }
    )
  });
  return res
}

export default async function Home() {
  const  data = await getData();
  console.log(data);
  return (
    <HomePageLayout data={data}/>
  )
}
