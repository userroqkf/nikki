import MyFeed from "../pages/MyFeed";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyFeed> = {
  component: MyFeed,
}

export default meta;

type Story = StoryObj<typeof MyFeed>;

export const Primary: Story = {
  render: () => <MyFeed />
}
