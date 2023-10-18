import { Meta, StoryObj } from "@storybook/react";
import SignupForm from "@/_components/SignupForm";

const meta: Meta<typeof SignupForm> = {
  component: SignupForm
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Primary: Story = {
  render: () => <SignupForm />
}