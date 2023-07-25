import { Meta, StoryObj } from "@storybook/react";
import ProfilePicture from "../components/ProfilePicture";

const meta: Meta<typeof ProfilePicture> = {
  component: ProfilePicture,
};

export default meta;

type Story = StoryObj<typeof ProfilePicture>;

export const Primary: Story = {
  args: {
    profilePictureURL: "https://picsum.photos/id/237/200/300", 
  }
} 
