import { createContext } from 'react';

type userProps = {
  profilePictureURL:string;
  fullName: string;
  username: string;
  backgroundImageURL: string;
}

export const CurrUserContext = createContext<userProps | null>(null);
