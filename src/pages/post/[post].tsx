import CommentBox from "@/components/CommentBox"
import Comment from "@/components/Comment"
import Layout from "@/components/Layout"
import PostContainer from "@/components/PostContainer"
import styles from "@/styles/[post].module.css"
import { Suspense } from "react"

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
    <div>
      <div className={styles.selectedPageName}>
        Post
      </div>
      <PostContainer 
        profilePictureURL={postsData.profilePictureURL}
        content={postsData.content}
        fullName={postsData.fullName}
        username={postsData.username}
        liked={postsData.liked}
      />
      <div className={styles.pageName}>
        Post Comment
      </div>
      <CommentBox profilePictureURL={"https://picsum.photos/id/237/200/300"} />
      <div className={styles.pageName}>
        Comments
      </div>
      {commentsData.map((comment:commentType, index: number) => {
        const {profilePictureURL, fullName, username, content} = comment;
        return (
          <Comment
            key={index}
            profilePictureURL={profilePictureURL}
            fullName={fullName}
            username={username}
            content={content}
          />
        )
        })
      }
    </div>
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
  await new Promise((res) => setTimeout(res, 5000))

  const data = JSON.stringify({"postsData": tempPostData , "commentsData": tempCommentData});

  return { props: {data}}
} 
