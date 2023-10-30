import { formatDistanceToNow, fromUnixTime, parseISO } from 'date-fns'

type postType = {
  postid: number;
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
  const {postid, text, image, date_created, first_name, last_name, username, profile_picture, comments_count, likes_count } = data;
  const postImageURL = getImageURL(image);
  const profilePictureURL = getImageURL(profile_picture);
  return (
    {
      postId: postid,
      profilePictureURL: profilePictureURL as string,
      fullName: first_name + " " + last_name,
      username: username,
      content: {
        datePosted: formatDateFromNow(new Date(date_created)),
        text: text,
        image: postImageURL as string,
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

export async function formatFollowingLists(followingList: Array<followingListType>):Promise<Array<formattedFollowingListType>> {
  const res = await Promise.all(followingList.map( async (following) => {
    const {profile_picture, first_name, last_name, username} = following;
    const profilePicture = getImageURL(profile_picture, process.env.BASE_URL);
    return (
      {
        profilePictureURL: profilePicture as string,
        fullName: first_name + " " + last_name,
        username,
        following: true
      }
    )
  }))
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
  postId: number
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
export async function formatFeedPosts(feedPosts: Array<feedPostsType>): Promise<Array<formattedFeedPostsType>> {
  const formattedPosts = await Promise.all(feedPosts.map(async (post) => {
    const { id, text, image, date_created, first_name, last_name, username, profile_picture, likes_count, comments_count, user_liked_post } = post;
    
    const profilePicture = await getImageURL(profile_picture, process.env.BASE_URL);
    const postImage = await getImageURL(image, process.env.BASE_URL);
    const dateCreated = formatDateFromNow(new Date(date_created));
    
    return {
      postId: id,
      profilePictureURL: profilePicture as string,
      fullName: first_name + ' ' + last_name,
      username,
      content: {
        text,
        ...(image ? { image: postImage } : {}),
        datePosted: dateCreated,
        likeCount: Number(likes_count),
        commentCount: Number(comments_count),
        liked: user_liked_post,
      },
    };
  }));
  
  return formattedPosts;
}


  type feedUserDataType = {
    id: number
    first_name: string;
    last_name: string;
    username: string;
    profile_picture: string;
    background_picture: string;
    following_count: string;
    follower_count: string;
  }

  export function getImageURL(id: string, baseURL?: string) {
    try {
      if (id) {
      return "https://d1su0spwyw95eu.cloudfront.net/" + `${id}`
      }
      return ""
    } catch(err) {
    }
  }


  export async function formatFeedUserData(feedUserData: feedUserDataType) {
    const {id, first_name, last_name, username, profile_picture, background_picture, follower_count, following_count} = feedUserData;
    
    const profilePicture = await getImageURL(profile_picture, process.env.BASE_URL)
    const backgroundImage = await getImageURL(background_picture, process.env.BASE_URL)

    const res = (
      {
        profilePictureURL: profilePicture as string,
        fullName: first_name + " " + last_name,
        username: username,
        backgroundImageURL: backgroundImage as string,
        followerCount: parseInt(follower_count),
        followingCount: parseInt(following_count)
      }
    )
    return res
  }

  export async function uploadImage(selectedFile: File) {
    const formData = new FormData();
    if(selectedFile) {
      formData.append('file', selectedFile);
    }
    const imageId = await fetch('api/upload', {method: 'POST', body: formData})
    return imageId.json()
    
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
    return body
  }
  export function formatDateFromNow(date: Date) {
    return formatDistanceToNow(date)
  }

  type postDataType = {
    id: number;
    text: string;
    image: string;
    date_created: Date;
    owner_id: number;
  }

  export async function formaNewPostData(postData: postDataType, userData: userDataType)  {
    const {date_created, id, image, owner_id, text} = postData;
    const {first_name, last_name, username, profile_picture} = userData;
    const dateCreatd = formatDateFromNow(new Date(date_created))
    const imageURL = await getImageURL(image)
    const profilePictureURL = await getImageURL(profile_picture)

    const res = {
      postId: id,
      profilePictureURL: profilePictureURL as string,
      content: {
        text: text,
        datePosted: dateCreatd,
        image: imageURL as string,
        likeCount: 0,
        commentCount: 0,
        liked: false
      },
      fullName: first_name + " " + last_name,
      username: username
    }

    return res
  }

  export async function deletePost(postId: number) {
    const url = `http://localhost:3000/api/post`;
    await fetch(url,{method: 'DELETE', body: JSON.stringify({postId})})
    
  }

  type userDataType = {
    id: number,
    first_name: string;
    last_name: string;
    username: string;
    profile_picture: string;
    background_picture: string;
  }

  export function userDataFormat(userData: userDataType) {
    const {id, first_name, last_name, username, profile_picture, background_picture} = userData;
    return (
      {
        userId: id,
        username,
        fullName: first_name + " " + last_name,
        profilePictureURL: profile_picture,
        backgroundImageURL: background_picture
      }
    )
  }