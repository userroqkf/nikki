import HomePageLayout from "../components/HomePageLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePageLayout> = {
  component: HomePageLayout,
}

export default meta;

type Story = StoryObj<typeof HomePageLayout>;

export const Primary: Story = {
  render: () => <HomePageLayout />
}
