import { getFeedPosts } from "lib/database/getFeedPosts";
import Layout from "../_components/Layout";
import MyFeedLayout from "../_components/MyFeedLayout";
import { formatFeedPosts, formatFeedUserData } from "utils/helperFunctions";
import { getUserData } from "lib/database/getUserData";


async function getData() {
  // await new Promise(res => setTimeout(res, 3000));
  // const fetchedDataMock = [
  //   {
  //     profilePictureURL:"https://picsum.photos/id/237/200/300",
  //     content: {
  //       text: "Hello this is Tom and I am just testing this component out",
  //       datePosted: "25s",
  //       likeCount: 21,
  //       commentCount: 7
  //     },
  //     fullName:"Tom Tom",
  //     username: "tomtom19238",
  //     liked: false,
  //   },
  //   {
  //     profilePictureURL: "https://picsum.photos/id/237/200/300",
  //     content: {
  //       text: "Hello this is Tom and I am just testing this component out, Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component ouHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out,Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out",
  //       datePosted: "25s",
  //       likeCount: 21,
  //       commentCount: 7
  //     },
  //     fullName: "Tom Tom",
  //     username: "tomtom19238",
  //     liked: true,
  //   }
  //   ]
  // return fetchedDataMock
}

export default async function MyFeed() {
  const feedPosts = await getFeedPosts(2, 3);
  const feedUserData = await getUserData(3);
  const formattedFeedUserData = formatFeedUserData(feedUserData)
  const formattedFeedPosts = formatFeedPosts(feedPosts)

  return (
    <MyFeedLayout feedPosts={formattedFeedPosts} userData={formattedFeedUserData}/>
  )
}
