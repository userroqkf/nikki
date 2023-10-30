import LikeButton from '@/_components/LikeButton'
import '@testing-library/jest-dom'
import {fireEvent, getByRole, render, screen, waitFor} from '@testing-library/react'

describe('test PostContainer', () => {

// jest.mock('next/navigation', () => ({
//   useRouter: () => ({
//     route: '/',
//     pathname: '/',
//     query: {},
//     asPath: '/',
//   }),
// }));

  const mockProps = {
    postId: 2,
    currUser: "johndoe",
    likeCount: 10,
    liked: false
  }

  it('should render LikeButton', () => {
    render(<LikeButton {...mockProps} />)
  })

  it('should have like count of 10', () => {
    render(<LikeButton {...mockProps} />)
    const likeCount = screen.getByText(10)
    expect(likeCount).toHaveTextContent("10")
  })

  it('should increment LikeCount', async () => {
    render(<LikeButton {...mockProps} />)
    const likeButton = screen.getByRole('button')
    const likeCount = screen.getByText(10)
    fireEvent.click(likeButton)
    expect(likeCount).toHaveTextContent("11")

  })

  it('should decrement LikeCount', () => {
    render(<LikeButton postId={2} currUser={"johndoe"} likeCount={10} liked={true} />)
    const likeButton = screen.getByRole('button')
    const likeCount = screen.getByText(10)
    fireEvent.click(likeButton)
    expect(likeCount).toHaveTextContent("9")
  })

})
