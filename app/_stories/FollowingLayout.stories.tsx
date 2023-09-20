import { Meta, StoryObj } from "@storybook/react";
import FollowingLayout from "../_components/FollowingLayout";

const meta: Meta<typeof FollowingLayout> = {
  component: FollowingLayout
};

export default meta;

type Story = StoryObj<typeof FollowingLayout>;

export const Primary: Story = {
  render: () => <FollowingLayout />
}
