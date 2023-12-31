import MyFeed from "@/MyFeed/page";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyFeed> = {
  component: MyFeed,
}

export default meta;

type Story = StoryObj<typeof MyFeed>;

export const Primary: Story = {
  render: () => <MyFeed />
}
