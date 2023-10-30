// describe('login', () => {
//   it('should login with the correct username and password', () => {
//     cy.visit('localhost:3000/auth/signin')
//     cy.get(':nth-child(2) > .form-control').type('johndoe')
//     cy.get(':nth-child(2) > .form-control').should('have.value', 'johndoe')
//     cy.get(':nth-child(3) > .form-control').type('password')
//     cy.get(':nth-child(3) > .form-control').should('have.value', 'password')
//     cy.get('.Button_button__gNz1t').click()
//     cy.wait(500)
//     cy.url().should("equal",'http://localhost:3000/')
//     cy.get('nav > .Button_button__gNz1t').click()
//     cy.wait(500)
//     cy.url().should("equal",'http://localhost:3000/auth/signin')
//   })
// })

import { Amplify, Auth } from "aws-amplify";
import "../support/auth-provider-commands/cognito";

import awsConfig from '../../app/aws-exports'

Amplify.configure({ ...awsConfig, ssr: true });

describe("AWS Cognito", function () {
  beforeEach(function () {
    Auth.signIn("johndoe","password")
    cy.wait(500)
  });
  it('should visit home page', () => {
    cy.visit('localhost:3000/')
  })

  it('should visit signin page when logout button is clicked', () => {
    cy.visit('localhost:3000/')
    cy.get('nav > .Button_button__gNz1t').click()
    cy.wait(500)
    cy.url().should("equal",'http://localhost:3000/auth/signin')
  })
})