'use client'
import Layout from "./Layout";
import HomePageLayout from "./HomePageLayout";

export default function MainPage() {
  return (
    <Layout route={"Home"} >
      {<HomePageLayout/>}
    </Layout>
  )
}
