import PostContainer from '@/_components/PostContainer'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'

describe('test PostContainer', () => {
  const mockProps = {
    postId: 5,
    profilePictureURL:"https://picsum.photos/id/237/200/300",
    fullName:"Tom Tom",
    username: "tomtom19238",
    content: {
      text: "This is a comment testing content string",
      datePosted: "30s",
      commentCount: 100,
      likeCount: 11,
      liked: false
    },
  }

  it('should render PostContainer', () => {
    render(<PostContainer {...mockProps} />)
  })

  it('should have the corresponding text', () => {
    render(<PostContainer {...mockProps} />)
    const post = document.querySelector('.postContainer')
    expect(post).toHaveTextContent("This is a comment testing content string");
  })

  it('check like button exists', () => {
    render(<PostContainer {...mockProps} />)
    const likeButton = screen.getAllByRole('button')[1]
    expect(likeButton).toBeTruthy()
  })

  it('should change to editing mode when clicked', () => {
    render(<PostContainer {...mockProps}/>)
    const editingButton = screen.getByTitle("editButton")
    fireEvent.click(editingButton)
    expect(editingButton).not.toBeInTheDocument()
  })

})
