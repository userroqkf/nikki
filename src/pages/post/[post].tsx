import Comment from "../../components/Comment"
import Layout from "../../components/Layout"
import PostContainer from "../../components/PostContainer"

type commentType = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  content: {
    datePosted: string;
    text: string;
  } 
}

export default function PostPage() {
 return (
  <Layout route="">
    <PostContainer />
    {comments.map((comment: commentType) => {
        <Comment {...comment}/>
      })}
  </Layout>
 )
} 

export async function getServerSideProps() {
 
  return { props: {data}}
} 
