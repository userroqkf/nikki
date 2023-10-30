import MyFeedLayout from "../_components/MyFeedLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyFeedLayout> = {
  component: MyFeedLayout,
}

export default meta;

type Story = StoryObj<typeof MyFeedLayout>;

export const Primary: Story = {
  render: () => <MyFeedLayout 
  userData={{
    profilePictureURL: "https://picsum.photos/id/237/300/300",
    backgroundImageURL: "https://picsum.photos/seed/picsum/2000/3000",
    fullName: "Frank Tom",
    username: "franktom293",
    followingCount: 183,
    followerCount: 78,
  }}
  feedPosts={
    [{
      postId: 2,
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      content: {
        text: "test string",
        datePosted: "1 hour ago",
        likeCount: 3,
        commentCount: 2,
        liked: true,
      },
      fullName: "test",
      username: "testname",
    }]
  }
  />
}
