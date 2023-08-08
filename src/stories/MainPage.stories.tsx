import MainPage from "../components/MainPage";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainPage> = {
  component: MainPage,
}

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
  render: () => <MainPage />
}
