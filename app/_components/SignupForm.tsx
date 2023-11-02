'use client'

import { Auth } from 'aws-amplify';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from "@/_styles/SignupForm.module.css"
import Button from './Button';

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export default function SignupForm() {
  const [error, setError] = useState('');
const router = useRouter()

  const [ signupform , setSignupform ] = useState({
    username: "", 
    password: "",
    email: "",
    firstName: "",
    lastName:"",
  })

  const handleSignup = async(e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      const {username, password, email, firstName, lastName} = signupform
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      await fetch("/api/user/?", {method: "POST", body:JSON.stringify({username,firstName, lastName})})
      router.push('/auth/confirm-email?' + new URLSearchParams({username: username}))
    } catch (error: Error | any) {
      const code = error.code;
      switch(code) {
        case 'UsernameExistsException':
          setError("Username already exists")
          break;
        default:
          setError("There as an error, please try again later")
          break;
      }
    }
  }

  return (
    <form className={styles.form}>
      <h3>Sign Up</h3>
      <div className={styles.formInput}>
        <h5 style={{ color: 'red' }}>{error}</h5>
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={signupform.firstName}
          onChange={(e) => setSignupform(prev => {return {...prev, firstName: e.target.value}})}
        />
      </div>
      <div className={styles.formInput}>
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={signupform.lastName}
          onChange={(e) => setSignupform(prev => {return {...prev, lastName: e.target.value}})}
        />
      </div>
      <div className={styles.formInput}>
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter username"
          value={signupform.username}
          onChange={(e) => setSignupform(prev => {return {...prev, username: e.target.value}})}
        />
      </div>
      <div className={styles.formInput}>
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={signupform.email}
          onChange={(e) => setSignupform(prev => {return {...prev, email: e.target.value}})}
        />
      </div>
      <div className={styles.formInput}>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={signupform.password}
          onChange={(e) => setSignupform(prev => {return {...prev, password: e.target.value}})}
        />
      </div>
      <div className="submit">
        <Button size="large" style='solid' label='Sign Up' handleFormSubmit={handleSignup}/>
      </div>
      <p className={styles.alreadyRegistered}>
        Already registered <a href="/auth/signin">sign in?</a>
      </p>
    </form>
  )
}