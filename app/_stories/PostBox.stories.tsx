import type { Meta, StoryObj } from "@storybook/react";
import PostBox from "../_components/PostBox";

const meta: Meta<typeof PostBox> = {
  component: PostBox
};

export default meta;

type Story =  StoryObj<typeof PostBox>;

export const Primary: Story =  {
  render: () => <PostBox/>
}
