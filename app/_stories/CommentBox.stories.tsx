import CommentBox from "../_components/CommentBox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CommentBox> = {
  component: CommentBox,
}

export default meta;

type Story = StoryObj<typeof CommentBox>;

export const Primary: Story = {
  args: {
  }
} 
