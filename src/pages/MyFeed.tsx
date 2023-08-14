'use client'
import Layout from "../components/Layout";
import MyFeedLayout from "../components/MyFeedLayout";

export default function MyFeed() {
  return (
    <Layout route={"My Feed"} >
      {<MyFeedLayout/>}
    </Layout>
  )
}
