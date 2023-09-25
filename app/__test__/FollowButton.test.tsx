import FollowingContainer from '@/_components/FollowingContainer'
import '@testing-library/jest-dom'
import {fireEvent, getByRole, render, screen, waitFor} from '@testing-library/react'

describe('test PostContainer', () => {
  const mockPropsFollowing = {
    profilePictureURL: "https://picsum.photos/id/237/200/300",
    fullName: "Jason Neo",
    username: "jasonneo392",
    following: true,
  }

  const mockPropsNotFollowing = {
    profilePictureURL: "https://picsum.photos/id/237/200/300",
    fullName: "Jason Neo",
    username: "jasonneo392",
    following: false,
  }

  it('should render PostContainer', () => {
    render(<FollowingContainer {...mockPropsFollowing} />)
  })

  it('should have following button', () => {
    render(<FollowingContainer {...mockPropsFollowing} />)
    const followingButton = screen.getByRole('button')
    expect(followingButton.innerHTML).toBe("Following")
  })

  it('should have follow button', async () => {
    render(<FollowingContainer {...mockPropsNotFollowing} />)
    const followingButton = screen.getByRole('button')
    expect(followingButton.innerHTML).toBe("Follow")
  })

  it('should change from following to follow button', async () => {
    render(<FollowingContainer {...mockPropsFollowing} />)
    const followingButton = screen.getByRole('button')
    expect(followingButton.innerHTML).toBe("Following")
    fireEvent(followingButton,new MouseEvent('click', { bubbles: true}))
    expect(followingButton.innerHTML).toBe("Follow")
  })

  it('should change from follow to follow ingbutton', async () => {
    render(<FollowingContainer {...mockPropsNotFollowing} />)
    const followingButton = screen.getByRole('button')
    expect(followingButton.innerHTML).toBe("Follow")
    fireEvent(followingButton,new MouseEvent('click', { bubbles: true}))
    expect(followingButton.innerHTML).toBe("Following")
  })
})

