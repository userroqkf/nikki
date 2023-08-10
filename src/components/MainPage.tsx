import { useState } from "react";

import Layout from "./Layout";
import HomePageLayout from "./HomePageLayout";
import MyFeedLayout from "./MyFeedLayout";
import FollowingLayout from "./FollowingLayout";

export default function MainPage() {

const [focus, setFocus] = useState<string>("Home");
  return (
    <Layout focus={focus} setFocus={setFocus}>
      {focus == "Home" &&  <HomePageLayout />}
      {focus == "My Feed" && <MyFeedLayout/>}
      {focus == "Following" && <FollowingLayout/>}
    </Layout>
  )
}
