import { Meta, StoryObj } from "@storybook/react";
import UploadFileButton from "../_components/UploadFileButton";
import { useState } from "react";

const meta: Meta<typeof UploadFileButton> = {
  component: UploadFileButton, 
}

export default meta;

type Story = StoryObj<typeof UploadFileButton>;

export const Primary = () => {
  const [showimage, setShowImage] = useState("")
  const [selectedFile,setSelectedFile] = useState<File | null>(null)

  render: () => <UploadFileButton setShowImage={setShowImage} setSelectedFile={setSelectedFile} context="storybook context"/>
} 
