import { Amplify, Auth } from "aws-amplify";
import "../support/auth-provider-commands/cognito";

import awsConfig from '../../app/aws-exports'

Amplify.configure({ ...awsConfig, ssr: true });

describe("like and unlike post when logged in", function () {
  beforeEach(function () {
    Auth.signIn("johndoe","password")
    cy.wait(500)
  });

  it('should go to unlike post', () => {
    cy.visit('localhost:3000/')
    cy.wait(1000)
    cy.get(':nth-child(3) > .PostContainer_postContentContainer__aRJq0 > .PostContainer_contentFooter__4XNXG > :nth-child(1) > .LikeButton_likeButton__NcEHO').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > .PostContainer_postContentContainer__aRJq0 > .PostContainer_contentFooter__4XNXG > :nth-child(1) > span').contains("0")
  })

  it('should go to like post', () => {
    cy.visit('localhost:3000/')
    cy.wait(1000)
    cy.get(':nth-child(3) > .PostContainer_postContentContainer__aRJq0 > .PostContainer_contentFooter__4XNXG > :nth-child(1) > .LikeButton_likeButton__NcEHO').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > .PostContainer_postContentContainer__aRJq0 > .PostContainer_contentFooter__4XNXG > :nth-child(1) > span').contains("1")
  })

})

