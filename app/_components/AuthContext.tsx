'use client'
import { Amplify, Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { userDataFormat } from 'utils/helperFunctions';
import awsconfig from '../aws-exports';

type userProps = {
  userId: number;
  profilePictureURL:string;
  fullName: string;
  username: string;
  backgroundImageURL: string;
}

type authProps = 
{ 
  userContext: userProps | null; 
  signIn: (username: string, password: string) => Promise<void>; 
  signOut: () => Promise<void>; 
}

const getUserInfo = async () => {
  const userInfo = await Auth.currentUserInfo()
  if (userInfo) {
    const url = `http://localhost:3000/api/user/?`; 
    const userDataResponse = await fetch(url + new URLSearchParams({ username: userInfo.username }), { method: 'GET' });
    const userData = await userDataResponse.json();
    const userDataFormatted = userDataFormat(userData);
    return userDataFormatted
  }
  return null
}

export const AuthContext = createContext<authProps>({} as authProps);

export function AuthProvider({ children } : React.ReactNode) {
  const router = useRouter();
  const [userContext, setUserContext] = useState<userProps | null>(null);

  useEffect(() => {
    getUserInfo()
      .then(res => {
        setUserContext(res);
      })
  }, [])

  const signIn = async (username:string, password: string) => {
    console.log("here signin", username, password);
    try {
      await Auth.signIn({
        username,
        password,
      });
      const formattedUserData = await getUserInfo();
      setUserContext(formattedUserData);
      router.push('/');

    } catch (error: Error) {
      console.log("printed error message",error);
      const code = error.code;
      switch(code) {
        case 'UsernameExistsException':
          alert('user already exists')
      }
    }
  };

  const signOut = async () => {
    await Auth.signOut()
    setUserContext(null)
    router.push('/auth/signin')
  };

  return (
    <AuthContext.Provider value={{ userContext, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
