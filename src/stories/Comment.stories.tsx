import { Meta, StoryObj } from "@storybook/react";
import Comment from "../components/Comment";

const meta: Meta<typeof Comment> = {
  component: Comment,
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Primary: Story = {
  args: {
    profilePictureURL: "https://picsum.photos/id/237/200/300",
    content: {
      text: "Hello this is Tom and I am just testing this component out",
      datePosted: "25s",
    },
    fullName: "Tom Tom",
    username: "tomtom19238"
  }
} 

export const SuperLongText: Story = {
  args: {
    profilePictureURL: "https://picsum.photos/id/237/200/300",
    content: {
      text: "Hello this is Tom and I am just testing this component out, Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component ouHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out,Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component outHello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out Hello this is Tom and I am just testing this component out",
      datePosted: "25s",
    },
    fullName: "Tom Tom",
    username: "tomtom19238"
  }
}
