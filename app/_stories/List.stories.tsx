import type { Meta, StoryObj } from "@storybook/react";
import ListView from "../_components/ListView";

const meta: Meta<typeof ListView> = {
  component: ListView, 
}

export default meta;

type Story = StoryObj<typeof ListView>;

export const Primary: Story = {
  render: () => <ListView/>
}

