'use client'
import { Auth } from 'aws-amplify';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type ConfirmSignUpParameters = {
  username: string;
  code: string;
};

export default function ConfirmSignUp() {
  const [code, setCode] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();


  const handleConfirmSignup = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    
    const username = searchParams.get("username");
    try {
      await Auth.confirmSignUp(username, code);
      router.push("/");
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  return (
    <form>
      <h3>Confirm Email</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="code"
          className="form-control"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(prev => e.target.value)}
        />
      </div>
        <button type="submit" className="btn btn-primary" onClick={handleConfirmSignup}>
          Confirm
        </button>
    </form>
  )
}