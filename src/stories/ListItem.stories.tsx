import type { Meta, StoryObj } from "@storybook/react";

import ListItem from "../components/ListItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
}

export default meta;

type Story = StoryObj<typeof ListItem>;


export const ProfileListItem: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faUser} /> ,
    label: "Profile"
  }
}
