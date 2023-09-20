import { Meta, StoryObj } from "@storybook/react";
import FollowingContainer from "../_components/FollowingContainer";

const meta: Meta<typeof FollowingContainer> = {
  component: FollowingContainer
};

export default meta;

type Story = StoryObj<typeof FollowingContainer>;

export const Primary: Story = {
  args: {
    profilePictureURL: "https://picsum.photos/id/237/200/300",
    fullName: "Jason Neo",
    username: "jasonneo392",
    following: true,
  }
};

export const Secondary: Story = {
  args: {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      fullName: "Jason Neo",
      username: "jasonneo392",
      following: false,
    }
}
