import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function LoginStateButton() {
  const router = useRouter()
  const {signOut, userContext}= useContext(AuthContext)
  return (
    <>
    {userContext && <Button label="logout" style="solid" size="medium" handleFormSubmit={signOut}/>}
    {!userContext && <Button label="login" style="solid" size="medium" handleFormSubmit={() => router.push('/auth/signin')}/>}
    </>
  )
}
