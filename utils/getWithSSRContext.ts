import { withSSRContext } from 'aws-amplify';
import { cookies } from 'next/headers';
import awsconfig from '../app//aws-exports';

type CookieObj = {
  name: string;
  value: string;
};

const config = {
  ...awsconfig,
  ssr: true,
};

function serializeCookies(cookies: CookieObj[]) {
  return cookies
    .map((c) => `${c.name}=${c.value ? decodeURIComponent(c.value) : ''};`)
    .join('');
}

export default function getWithSSRContext() {
  const allCookies = cookies().getAll();

  const SSR = withSSRContext({
    req: {
      headers: {
        cookie: serializeCookies(allCookies),
      },
    },
  });
  SSR.configure(config);

  return SSR;
}