import HomePageLayout from "./_components/HomePageLayout";


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
        commentCount: 7,
        image: "https://picsum.photos/id/237/200/300",
      },
      fullName: "Tom Tom",
      username: "tomtom19238",
      liked: true,
    }
    ]
  return fetchedDataMock
}

export default async function Home() {
  const  data = await getData();
  return (
    <HomePageLayout data={data}/>
  )
}
