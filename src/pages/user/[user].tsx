import HomePageProfile from "../../components/HomePageProfile"
import PostContainer from "../../components/PostContainer";
import Layout from "@/components/Layout"

export default function userPage({userData}) {
  userData = JSON.parse(userData)
  return (
    <Layout route="">
      <HomePageProfile 
        profilePicture={"https://picsum.photos/id/237/300/300"}
        backgroundImage={"https://picsum.photos/seed/picsum/2000/3000"}
        fullName={"Random User Test"}
        username={"franktom293"}
        followingCount={183}
        followerCount={78}
      />
      {userData.map((data) => {
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

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
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
  const userData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        JSON.stringify(tempData)
      );
    }, 3000);
  });
 // Pass data to the page via props
  console.log("printData", userData, "typeof", typeof userData)
  return { props: { userData } }  
}
