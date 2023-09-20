import { Meta, StoryObj } from "@storybook/react";
import UploadFileButton from "../_components/UploadFileButton";

const meta: Meta<typeof UploadFileButton> = {
  component: UploadFileButton, 
}

export default meta;

type Story = StoryObj<typeof UploadFileButton>;

export const Primary:Story = {
  render: () => <UploadFileButton/>
} 
