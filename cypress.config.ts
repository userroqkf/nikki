import { defineConfig } from "cypress";

// Populate process.env with values from .env file
require('dotenv').config()
// AWS exports
const awsConfig = require('./app/aws-exports')
export default defineConfig({
  env: {
    cognito_username: process.env.AWS_COGNITO_USERNAME || "johndoe",
    cognito_password: process.env.AWS_COGNITO_PASSWORD || "password",
    awsConfig: awsConfig.default,
    cognito_domain: process.env.BASE_URL || "http://localhost:3000",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
