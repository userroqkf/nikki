import HomePageProfile from "../../_components/HomePageProfile"
import PostContainer from "../../_components/PostContainer";

const tempData = [
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

export default function userPage() {
  const userData = tempData;
  return (
    <div>
      <HomePageProfile 
        profilePictureURL={"https://picsum.photos/id/237/300/300"}
        backgroundImageURL={"https://picsum.photos/seed/picsum/2000/3000"}
        fullName={"Random User Test"}
        username={"franktom293"}
        followingCount={183}
        followerCount={78}
        following={true}
      />
      {userData.map((data, index: number) => {
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
    </div>
  )  
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const res = await fetch(`https://.../data`)
//   // const data = await res.json()
//   const tempData = [
//         {
//           profilePictureURL:"https://picsum.photos/id/237/200/300",
//           content: {
//             text: "Hello this is Tom and I am just testing this component out",
//             datePosted: "25s",
//             likeCount: 21,
//             commentCount: 7
//           },
//           fullName:"Tom Tom",
//           username: "tomtom19238",
//           liked: false,
//         },
//         {
//           profilePictureURL: "https://picsum.photos/id/237/200/300",
//           content: {
//             text: "Hello this is Tom and I am just testing this component out, Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component ouHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out,Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out",
//             datePosted: "25s",
//             likeCount: 21,
//             commentCount: 7
//           },
//           fullName: "Tom Tom",
//           username: "tomtom19238",
//           liked: true,
//         }
//       ]
//   const userData = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(
//         JSON.stringify(tempData)
//       );
//     }, 3000);
//   });
//  // Pass data to the page via props
//   return { props: { userData } }  
// }
