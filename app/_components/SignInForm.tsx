'use client'

import { Auth } from 'aws-amplify';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export default function SigninForm() {
  const { signIn } = useContext(AuthContext);

  const router = useRouter()

  const [ signinform , setSigninform ] = useState({
    username: "", 
    password: ""
  })

  // const handleSignup = async(e:React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault()
  //   try {
  //     const {username, password} = signinform
  //     const { user } = await Auth.signIn({
  //       username,
  //       password,
  //     });
  //     router.push('/')
  //   } catch (error: Error) {
  //     const code = error.code;
  //     switch(code) {
  //       case 'UsernameExistsException':
  //         alert('user already exists')
  //     }
  //   }
  // }

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter username"
          value={signinform.username}
          onChange={(e) => setSigninform(prev => {return {...prev, username: e.target.value}})}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={signinform.password}
          onChange={(e) => setSigninform(prev => {return {...prev, password: e.target.value}})}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault()
          signIn(signinform.username, signinform.password)
          }
        }>
          Sign In
        </button>
      </div>
    </form>
  )
}