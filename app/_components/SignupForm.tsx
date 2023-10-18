'use client'

import { Auth } from 'aws-amplify';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export default function SignupForm() {
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
      const {username, password, email} = signupform
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        },
        // autoSignIn: {
        //   // optional - enables auto sign in after user is confirmed
        //   enabled: true,
        // },
      });
      console.log(user);
      router.push('/auth/confirm-email?' + new URLSearchParams({username: username}))
    } catch (error: Error) {
      const code = error.code;
      switch(code) {
        case 'UsernameExistsException':
          alert('user already exists')
      }
    }
  }

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={signupform.firstName}
          onChange={(e) => setSignupform(prev => {return {...prev, firstName: e.target.value}})}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={signupform.lastName}
          onChange={(e) => setSignupform(prev => {return {...prev, lastName: e.target.value}})}
        />
      </div>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter username"
          value={signupform.username}
          onChange={(e) => setSignupform(prev => {return {...prev, username: e.target.value}})}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={signupform.email}
          onChange={(e) => setSignupform(prev => {return {...prev, email: e.target.value}})}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={signupform.password}
          onChange={(e) => setSignupform(prev => {return {...prev, password: e.target.value}})}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  )
}