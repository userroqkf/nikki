describe("like and unlike post when logged in", function () {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('redirect to signin page when like button is clicked', () => {
    cy.visit('localhost:3000/post/5')
    cy.wait(1000)
    cy.get('.LikeButton_likeButton__NcEHO').click()
    cy.url().should("equal",'http://localhost:3000/auth/signin')
  })

  it('redirect to signin page when comment button is clicked', () => {
    cy.visit('localhost:3000/post/5')
    cy.wait(1000)
    cy.get('#commentInput').type("new post")
    cy.get('.CommentBox_buttonPosition__ey59U > .Button_button__gNz1t').click()
    cy.url().should("equal",'http://localhost:3000/auth/signin')
  })

  it('should redirect to signin page when visiting homepage', () => {
    cy.visit('localhost:3000/')
    cy.wait(1000)
    cy.url().should("equal",'http://localhost:3000/auth/signin')
  })

  it('should redirect to signin page when visiting myfeed', () => {
    cy.visit('localhost:3000/MyFeed')
    cy.wait(1000)
    cy.url().should("equal",'http://localhost:3000/auth/signin')
  })

  it('should redirect to signin page when visiting following', () => {
    cy.visit('localhost:3000/following')
    cy.wait(1000)
    cy.url().should("equal",'http://localhost:3000/auth/signin')
  })
}) 