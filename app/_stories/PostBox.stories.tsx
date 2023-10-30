import type { Meta } from "@storybook/react";
import PostBox from "../_components/PostBox";
import { useState } from "react";

const meta: Meta = {
  component: PostBox,
  title: "PostBox", // Optionally, you can specify a title for your component in Storybook
};

export default meta;

export const Primary = () => {
  const [postsState, setPostsState] = useState([
    {
      postId: 2,
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      content: {
        text: "test string",
        datePosted: "1 hour ago",
        likeCount: 3,
        commentCount: 2,
        liked: true,
      },
      fullName: "test",
      username: "testname",
    },
  ]);

  return <PostBox setPostsState={setPostsState} />;
};
