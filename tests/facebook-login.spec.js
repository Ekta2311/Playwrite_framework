const { test, expect } = require('@playwright/test');
const { FacebookLoginPage } = require('./facebookLoginPage');
const { username, password } = require('./facebookCredentials');

test('login to facebook', async ({ page }) => {
  const fbPage = new FacebookLoginPage(page);
  await fbPage.goto();
  await fbPage.enterEmail(username);
  await fbPage.enterPassword(password);
  // Optionally, click the login button
  // await fbPage.clickLogin();
  // Add assertions as needed
});
