import HomePageProfile from "../components/HomePageProfile";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePageProfile> = {
  component: HomePageProfile,
}

export default meta;

type Story = StoryObj<typeof HomePageProfile>;

export const Primary: Story = {
  args: { 
    profilePicture: "https://picsum.photos/id/237/300/300",
    backgroundImage: "https://picsum.photos/seed/picsum/2000/3000",
    fullName: "Frank Tom",
    username: "franktom293",
    followingCount: 183,
    followerCount: 78,
  }
}
