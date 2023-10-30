import { Amplify, Auth } from "aws-amplify";
import "../support/auth-provider-commands/cognito";

import awsConfig from '../../app/aws-exports'

Amplify.configure({ ...awsConfig, ssr: true });

describe("Create and delete new post as authenticated user", function () {
  beforeEach(function () {
    Auth.signIn("johndoe","password")
    cy.wait(500)
  });
  it ('should add new post to page', () => {
    cy.visit('localhost:3000/')
    cy.get('#postInput').type("this is a new post")
    cy.get('.Postbox_buttonPosition__RHHFj > .Button_button__gNz1t').click()
    cy.get('.Layout_main__XUuvn > :nth-child(3)').should('contain', 'this is a new post');
  })

  it ('should delete new post', () => {
    cy.visit('localhost:3000/')
    cy.get(':nth-child(3) > .PostContainer_buttonPosition__i7lXS > .fa-trash').click()
  })
})

describe("Edit post", function () {
  beforeEach(function () {
    Auth.signIn("johndoe","password")
    cy.wait(500)
  });

  it('should go to edit post and when cancel button is pressed it should display the original text', () => {
    cy.visit('localhost:3000/')
    cy.get(':nth-child(5) > .PostContainer_buttonPosition__i7lXS > .fa-pen-to-square').click()
    cy.get('.EditingBox_inputLayout__4V7Tl > .PostInput_textArea__Cnidu > #postInput').type(" edited post")
    cy.get(':nth-child(1) > .Button_button__gNz1t').click()
    cy.get('.Layout_main__XUuvn > :nth-child(5)').should('contain', 'An interesting post');
  })

  it('should edit post and display the edited text', () => {
    cy.visit('localhost:3000/')
    cy.get(':nth-child(5) > .PostContainer_buttonPosition__i7lXS > .fa-pen-to-square').click()
    cy.get('.EditingBox_inputLayout__4V7Tl > .PostInput_textArea__Cnidu > #postInput').type(" edited post")
    cy.get('.EditingBox_actionButton__fWvcQ > :nth-child(2) > .Button_button__gNz1t').click()
    cy.get('.Layout_main__XUuvn > :nth-child(5)').should('contain', 'An interesting post edited post');
  })
})