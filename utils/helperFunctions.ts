type postType = {
  id: number;
  text: string;
  image: string;
  date_created: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string;
  comments_count: string;
  likes_count: string;
}

export function formatPostData(data: postType, liked: boolean) {
  const {id, text, image, date_created, first_name, last_name, username, profile_picture, comments_count, likes_count } = data;
  return (
    {
      profilePictureURL: "",
      fullName: first_name + " " + last_name,
      username: username,
      content: {
        datePosted: "",
        text: text,
        image: "",
        commentCount: Number(comments_count),
        likeCount: Number(likes_count),
        liked: liked,
      }
    }
  )
}

type followingListType  = {
  profile_picture: string;
  first_name: string;
  last_name: string;
  username: string;
}

type formattedFollowingListType = {
    profilePictureURL: string;
    fullName: string;
    username: string;
    following: boolean
}

export function formatFollowingLists(followingList: Array<followingListType>): Array<formattedFollowingListType> {
  const res = followingList.map((following) => {
    const {profile_picture, first_name, last_name, username} = following;
    return (
      {
        profilePictureURL: "",
        fullName: first_name + " " + last_name,
        username,
        following: true
      }
    )
  })
  return res
}

type followingPostType = {
  follower: number;
  following: number;
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string;
  text: string;
  image: string;
  date_created: string;
  owner_id: number;
  comments_count: string;
  likes_count: string;
  user_liked_post: true;
}

type formattedFollowingPostType = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number;
    liked: boolean;
  }
}

export function formatFollowingPosts(postsData: Array<followingPostType>): Array<formattedFollowingPostType> {
  const res = postsData.map((post, index) => {
    const {text, image, date_created, first_name, last_name, username, profile_picture, likes_count, comments_count, user_liked_post} = post
    return (
      {
        profilePictureURL: "",
        fullName: first_name + ' ' + last_name,
        username: username,
        content: {
          text: text,
          datePosted: "time ago test",
          likeCount: Number(likes_count),
          commentCount: Number(comments_count),
          liked: user_liked_post,
        },
      }
    )
  });

  return res
}

type feedPostsType = {
  id: number;
  text: string;
  image: string;
  date_created: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string;
  comments_count: string;
  likes_count: string;
  user_liked_post: boolean;
}


type formattedFeedPostsType = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  content: {
    text: string;
    image?: string;
    datePosted: string;
    likeCount: number;
    commentCount: number;
    liked: boolean;
  }
}
export function formatFeedPosts(feedPosts: Array<feedPostsType>): Array<formattedFeedPostsType> {
  console.log("feedposts clg",feedPosts);
  const res = feedPosts.map((post, index) => {
    const {text, image, date_created, first_name, last_name, username, profile_picture, likes_count, comments_count, user_liked_post} = post
    return (
      {
        profilePictureURL: "",
        fullName: first_name + ' ' + last_name,
        username: username,
        content: {
          text: text,
          image: "",
          datePosted: "time ago test",
          likeCount: Number(likes_count),
          commentCount: Number(comments_count),
          liked: user_liked_post,
          }
        }
      )
    });
    return res
  }

  type feedUserDataType = {
    id: number
    first_name: string;
    last_name: string;
    username: string;
    profile_picture: string;
    background_image?: string;
  }

  export function formatFeedUserData(feedUserData: feedUserDataType) {
    const {id, first_name, last_name, username, profile_picture, background_image} = feedUserData;
    return (
      {
        profilePictureURL: "",
        fullName: first_name + " " + last_name,
        username: username,
        background_image: ""
      }
    )
  }

  export async function uploadIamge(selectedFile: File) {
    const formData = new FormData();
    if(selectedFile) {
      formData.append('file', selectedFile);
    }
    const imageId = await fetch('api/upload', {method: 'POST', body: formData})
    return imageId
    
  }
  
  const validatePost = (input: string): boolean => {
    if (input.length === 0 && input.trim().length === 0) {
      Error("Please input valid string")
      return false
    }
    return input.length !== 0
  }

  export function formatBody(userId: string, text: string, imageId: string) {
    const body = new FormData()
    body.append('userId', userId.toString())
    body.append('text', text.toString())
    body.append('text', imageId.toString())
    console.log(formatBody);
    return body
  }