import HomePageLayout from "../_components/HomePageLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePageLayout> = {
  component: HomePageLayout,
}

export default meta;

type Story = StoryObj<typeof HomePageLayout>;

export const Primary: Story = {
  render: () => <HomePageLayout posts={
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
