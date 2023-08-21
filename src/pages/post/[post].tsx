import Comment from "../../components/Comment"
import Layout from "../../components/Layout"
import PostContainer from "../../components/PostContainer"
import styles from "../../styles/[post].module.css"

type commentType = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  content: {
    datePosted: string;
    text: string;
  } 
}

export default function PostPage({data}) {
  const {postsData, commentsData} = JSON.parse(data); 
  return (
    <Layout route="Post">
      <PostContainer profilePictureURL={postsData.profilePictureURL} content={postsData.content} fullName={postsData.fullName} username={postsData.username} liked={postsData.liked} />
      <div className={styles.pageName}>
        Comments
      </div>
      {commentsData.map((comment:commentType) => {
        const {profilePictureURL, fullName, username, content} = comment;
        return (<Comment profilePictureURL={profilePictureURL} fullName={fullName} username={username} content={content}/>)
        })
      }
  </Layout>
 )
} 

export async function getServerSideProps() {
   const tempPostData = {
    profilePictureURL:"https://picsum.photos/id/237/200/300",
    content: {
      text: "Hello this is Tom and I am just testing this component out",
      datePosted: "25s",
      likeCount: 21,
      commentCount: 7
    },
    fullName:"Tom Tom",
    username: "tomtom19238",
    liked: false,
  }

  const tempCommentData = [
    {
      profilePictureURL:"https://picsum.photos/id/237/200/300",
      fullName:"Tom Tom",
      username: "tomtom19238",
      content: {
        text: "This is a comment testing content string",
        datePosted: "30s"
      }
    },
    {
      profilePictureURL:"https://picsum.photos/id/237/200/300",
      fullName:"Tom Tom",
      username: "tomtom19238",
      content: {
        text: "This is a comment testing content string",
        datePosted: "30s"
      }
    },
    {
      profilePictureURL:"https://picsum.photos/id/237/200/300",
      fullName:"Tom Tom",
      username: "tomtom19238",
      content: {
        text: "This is a comment testing content string",
        datePosted: "30s"
      }
    },
    {
      profilePictureURL:"https://picsum.photos/id/237/200/300",
      fullName:"Tom Tom",
      username: "tomtom19238",
      content: {
        text: "This is a comment testing content string",
        datePosted: "30s"
      }
    },
    {
      profilePictureURL:"https://picsum.photos/id/237/200/300",
      fullName:"Tom Tom",
      username: "tomtom19238",
      content: {
        text: "This is a comment testing content string",
        datePosted: "30s"
      }
    },
    {
      profilePictureURL:"https://picsum.photos/id/237/200/300",
      fullName:"Tom Tom",
      username: "tomtom19238",
      content: {
        text: "This is a comment testing content string",
        datePosted: "30s"
      }
    },
  ]

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        JSON.stringify({"postsData": tempPostData , "commentsData": tempCommentData})
      );
    }, 3000);
  });

  return { props: {data}}
} 
