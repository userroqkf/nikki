'use client'
import { Auth } from 'aws-amplify';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from '@/_styles/ConfirmSignupForm.module.css';
import Button from './Button';

type ConfirmSignUpParameters = {
  // username: string | null;
  code: string;
};

export default function ConfirmSignUp() {
  const [error, setError] = useState('')
  const [code, setCode] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();


  const handleConfirmSignup = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    
    const username = searchParams.get("username");
    if (username) {
      try {
        await Auth.confirmSignUp(username, code);
        await fetch("/api/confirm/?", {method: "PUT", body:JSON.stringify({username})})
        router.push("/");
      } catch (error) {
        setError("Please try again later")
      }
    }
  }

  return (
    <form className={styles.form}> 
      <h3>Confirm Email</h3>
      <div className={styles.formInput}>
        <h5 style={{ color: 'red' }}>{error}</h5>
        <label>Confirmation Code</label>
        <input
          type="code"
          className="form-control"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(prev => e.target.value)}
        />
      </div>
        <Button style="solid" size="large" label='Confirm' handleFormSubmit={handleConfirmSignup}/>
    </form>
  )
}