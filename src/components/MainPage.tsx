import { useState } from "react";
import HomePageLayout from "./HomePageLayout";
import Layout from "./Layout";
import MyFeedLayout from "./MyFeedLayout";

export default function MainPage() {

const [focus, setFocus] = useState<string>("Home");
  return (
    <Layout focus={focus} setFocus={setFocus}>
      {focus == "Home" &&  <HomePageLayout />}
      {focus == "My Feed" && <MyFeedLayout/>}
      {/**focus == "Following" && **/}
    </Layout>
  )
}
