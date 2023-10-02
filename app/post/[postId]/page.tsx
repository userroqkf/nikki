import CommentBox from "../../_components/CommentBox"
import Comment from "../../_components/Comment"
import PostContainer from "../../_components/PostContainer"
import styles from "@/_styles/[post].module.css"
import { notFound } from "next/navigation"
import { checkPostExists } from "lib/database/checkPostExists"
import { getPost } from "lib/database/getPost"
import { getPostComments } from "lib/database/getPostComments"
import { checkUserLikedPost } from "lib/database/checkUserLikedPost"

import { formatPostData } from "../../../utils/helperFunctions"

type commentType = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  content: {
    datePosted: string;
    text: string;
  } 
}

export default async function PostPage({ params }: { params: { postId: string } }) {
  const postId = params.postId

  const postExists = await checkPostExists(postId);

  if (!Number(postExists)) {
    notFound()
  }

  const postData = await getPost(postId);
  const userLiked = await checkUserLikedPost("1", postId)
  const postComments = await getPostComments(postId)

  const [post, comments, liked] = await Promise.all([postData, postComments, userLiked])

  const postFormatted = formatPostData(post, liked)
  
  return (
    <div>
      <div className={styles.selectedPageName}>
        Post
      </div>
      <PostContainer 
        profilePictureURL={postFormatted.profilePictureURL}
        content={postFormatted.content}
        fullName={postFormatted.fullName}
        username={postFormatted.username}
      />
      <div className={styles.pageName}>
        Post Comment
      </div>
      <CommentBox profilePictureURL={"https://picsum.photos/id/237/200/300"} />
      <div className={styles.pageName}>
        Comments
      </div>
      {comments.map((comment:commentType, index: number) => {
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