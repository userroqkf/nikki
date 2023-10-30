import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostPage from '../post/[postId]/page'

// Write a test using Jest
test('should return the correct post', async () => {
  render(await PostPage({params: {postId: '5' }}))
})