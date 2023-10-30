'use client'

import { Auth } from 'aws-amplify';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import styles from "@/_styles/SigninForm.module.css"
import Button from './Button';
import Error from '@/error';

export default function SigninForm() {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const router = useRouter()

  const [ signinform , setSigninform ] = useState({
    username: "", 
    password: ""
  })

  return (
    <form className={styles.form}>
      <h3>Sign In</h3>
      <div className={styles.formInput}>
        <h5 style={{ color: 'red' }}>{error}</h5>
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter username"
          value={signinform.username}
          onChange={(e) => setSigninform(prev => {return {...prev, username: e.target.value}})}
        />
      </div>
      <div className={styles.formInput}>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={signinform.password}
          onChange={(e) => setSigninform(prev => {return {...prev, password: e.target.value}})}
        />
      </div>
      <div className={styles.submit}>
        <Button label='Sign In' size='large' style='solid' handleFormSubmit={async (e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault()
          try { 
            await signIn(signinform.username, signinform.password)
          }catch(error: Error | any) {
            switch(error.code) {
              case 'UserNotConfirmedException':
                setError("User is not confirmed")
                setTimeout(() => {
                  router.push('/auth/confirm-email?' + new URLSearchParams({username: signinform.username}))
                }, 1000)
                break;
              default:
                setError("Incorrect username or password")
            }
          }
          }
        }/>
      </div>
      <p className={styles.register}>
        New User? <a href="/auth/signup">Create new account</a>
      </p>
    </form>
  )
}