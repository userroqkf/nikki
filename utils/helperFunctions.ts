import { formatDistanceToNow, fromUnixTime, parseISO } from 'date-fns'
import { getUserById } from 'lib/database/getUserById';
import { getUserData } from 'lib/database/getUserData';

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

export async function formatFollowingLists(followingList: Array<followingListType>): Array<formattedFollowingListType> {
  const res = await Promise.all(followingList.map( async (following) => {
    const {profile_picture, first_name, last_name, username} = following;
    const profilePicture = await getImageURL(profile_picture, process.env.BASE_URL);
    return (
      {
        profilePictureURL: profilePicture,
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
      profilePictureURL: profilePicture,
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
  }

  export async function getImageURL(id: string, baseURL?: string) {
    try {
      if (id) {
      // const imageResponse = await fetch(`${baseURL}api/upload?` + new URLSearchParams({id}), {method:"GET"})
      // const imageURL = await imageResponse.json() 
      return "https://d1su0spwyw95eu.cloudfront.net/" + `${id}`
      }
      return ""
    } catch(err) {
        console.log(err)
    }
  }


  export async function formatFeedUserData(feedUserData: feedUserDataType) {
    const {id, first_name, last_name, username, profile_picture, background_picture} = feedUserData;
    
    const profilePicture = await getImageURL(profile_picture, process.env.BASE_URL)
    const backgroundImage = await getImageURL(background_picture, process.env.BASE_URL)

    const res = (
      {
        profilePictureURL: profilePicture as string,
        fullName: first_name + " " + last_name,
        username: username,
        backgroundImageURL: backgroundImage as string
      }
    )
    return res
  }

  export async function uploadIamge(selectedFile: File) {
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
    // console.log(formatBody);
    return body
  }
  export function formatDateFromNow(date: Date) {
    // console.log("formated date console log",date, formatDistanceToNow(date));
    return formatDistanceToNow(date)
  }


  export async function formaNewtPostData(postData, userData) {
    const {date_created, id, image, owner_id, text} = postData;
    const {first_name, last_name, username, profile_picture} = userData;
    const dateCreatd = formatDateFromNow(new Date(date_created))
    const imageURL = await getImageURL(image)
    const profilePictureURL = await getImageURL(profile_picture)

    const res = {
      key: id,
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