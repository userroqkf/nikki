import type { Meta, StoryObj } from "@storybook/react";
import ListView from "../components/ListView";

const meta: Meta<typeof ListView> = {
  component: ListView, 
}

export default meta;

type Story = StoryObj<typeof ListView>;

export const ListViewPreview: Story = {
  render: () => <ListView/>
}

