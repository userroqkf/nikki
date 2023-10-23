import CommentBox from "../../_components/CommentBox"
import Comment from "../../_components/Comment"
import PostContainer from "../../_components/PostContainer"
import styles from "@/_styles/[post].module.css"
import { notFound, redirect } from "next/navigation"
import { checkPostExists } from "lib/database/checkPostExists"
import { getPost } from "lib/database/getPost"
import { getPostComments } from "lib/database/getPostComments"
import { checkUserLikedPost } from "lib/database/checkUserLikedPost"

import { formatPostData } from "../../../utils/helperFunctions"
import getWithSSRContext from "utils/getWithSSRContext"
import { getUserId } from "lib/database/getUserId"

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
  const postComments = await getPostComments(postId)
  let userLiked = false

  const SSR = getWithSSRContext()
  try {
    const res = await SSR.Auth.currentAuthenticatedUser();
    const userId = await getUserId(res.username)
    userLiked = await checkUserLikedPost(userId.id, postId)
  } catch (err) {
    console.log(err);
    if (err !==("The user is not authenticated")) {
      console.log("error message shown",err);
    }
  }

  const [post, comments, liked] = await Promise.all([postData, postComments, userLiked])

  const postFormatted = formatPostData(post, liked)
  console.log("post", postFormatted);
  return (
    <div>
      <div className={styles.selectedPageName}>
        Post
      </div>
      <PostContainer
        postId={postFormatted.postId}
        profilePictureURL={postFormatted.profilePictureURL}
        content={postFormatted.content}
        fullName={postFormatted.fullName}
        username={postFormatted.username}
        redirectHome={true}
      />
      <div className={styles.pageName}>
        Post Comment
      </div>
      {/*TODO: if user is logged in show commentbox  */}
      {<CommentBox postId={postId}/>}
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