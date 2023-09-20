import HomePageProfile from "@/components/HomePageProfile";
import PostContainer from "@/components/PostContainer";

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

export default function MyFeedLayout() {
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
    <>
      <HomePageProfile 
        profilePictureURL={"https://picsum.photos/id/237/300/300"}
        backgroundImageURL={"https://picsum.photos/seed/picsum/2000/3000"}
        fullName={"Frank Tom"}
        username={"franktom293"}
        followingCount={183}
        followerCount={78}
        following={true}
      />
      {fetchedDataMock.map((data: postDataType, index: number) => {
        const { profilePictureURL, content, fullName, username, liked }= data;
        return (
          <PostContainer
            key={index}
            profilePictureURL={profilePictureURL}
            content={content}
            fullName={fullName}
            username={username} 
            liked={liked}
          />
        )
      })
      }
    </>
  )
}
