import MyFeedLayout from "../_components/MyFeedLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyFeedLayout> = {
  component: MyFeedLayout,
}

export default meta;

type Story = StoryObj<typeof MyFeedLayout>;

export const Primary: Story = {
  render: () => <MyFeedLayout />
}
