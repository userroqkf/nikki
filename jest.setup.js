// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { TextEncoder } from 'util';
import fetch from 'node-fetch';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn()
    };
  }
}));


global.TextEncoder = TextEncoder;
global.fetch = fetch;