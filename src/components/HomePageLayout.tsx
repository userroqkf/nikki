import Layout from "./Layout";
import PostBox from "./PostBox";
import PostContainer from "./PostContainer";

type postDataType = {
  profilePictureURL: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number
  },
  fullName: string;
  username: string;
  liked: boolean;
}

export default function HomePageLayout() {
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

  return(
    <Layout>
      <PostBox />
      {fetchedDataMock.map((data: postDataType) => {
        const { profilePictureURL, content, fullName, username, liked }= data;
         return (
          <PostContainer
            profilePictureURL={profilePictureURL}
            content={content}
            fullName={fullName}
            username={username} 
            liked={liked}
          />
        )
      })
      }
    </Layout>
  )
}
