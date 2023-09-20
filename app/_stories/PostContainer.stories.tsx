import { Meta, StoryObj } from "@storybook/react";
import PostContainer from "../_components/PostContainer";

const meta: Meta<typeof PostContainer> = {
  component: PostContainer,
};

export default meta;

type Story = StoryObj<typeof PostContainer>;

export const Primary: Story = {
  args: {
    profilePictureURL: "https://picsum.photos/id/237/200/300",
    content: {
      text: "Hello this is Tom and I am just testing this component out",
      datePosted: "25s",
      likeCount: 21,
      commentCount: 7
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
      likeCount: 21,
      commentCount: 7
    },
    fullName: "Tom Tom",
    username: "tomtom19238"
  }
} 
