import Layout from "../_components/Layout";
import MyFeedLayout from "../_components/MyFeedLayout";


async function getData() {
  await new Promise(res => setTimeout(res, 3000));
  const fetchedDataMock = [
    {
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
    },
    {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      content: {
        text: "Hello this is Tom and I am just testing this component out, Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component ouHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out,Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out",
        datePosted: "25s",
        likeCount: 21,
        commentCount: 7
      },
      fullName: "Tom Tom",
      username: "tomtom19238",
      liked: true,
    }
    ]
  return fetchedDataMock
}

export default async function MyFeed() {
  const data = await getData();
  return (
    <MyFeedLayout data={data}/>
  )
}
