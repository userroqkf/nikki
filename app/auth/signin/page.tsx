import SigninForm from "@/_components/SignInForm";
import { redirect } from "next/navigation";
import getWithSSRContext from "utils/getWithSSRContext";

export default async function userPage() {
  return (
    <SigninForm/>
  )  
}