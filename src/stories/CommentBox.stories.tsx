import CommentBox from "../components/CommentBox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CommentBox> = {
  component: CommentBox,
}

export default meta;

type Story = StoryObj<typeof CommentBox>;

export const Primary: Story = {
  args: {
    profilePictureURL: "https://picsum.photos/id/237/200/300"
  }
} 
