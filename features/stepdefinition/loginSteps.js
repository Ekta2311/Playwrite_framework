const { When, Then, Given } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
 
const {chromium} = require('playwright');
const  PageObjectManager  = require('../Manager/PageObjectManager.js'); // Import the page object

const dataset = require('../ExternalResources/data.json');



Given('I am on the login page', async function () {
                       // Open new page

       const FBPage= this.POManager.getFBLoginPage();
        await FBPage.openFBURL();
        await FBPage.enterUsername('your_username'); // Replace with your username
        await FBPage.enterPassword('your_password'); // Replace with your password
         // Open Facebook URL

});

 When('I enter my username and password I click the login button',async function () {
    
      const instaPage= this.POManager.getInstaLoginPage();

      await instaPage.openInstaURL();
      await instaPage.enterUsernameinsta('insta_your_username'); // Replace with your username
      await instaPage.enterPasswordinsta('Insta_your_password'); // Replace with your password


         });

      Given('a login to Facebook application with {string} and {string}', async function (usernameParam, passwordParam) {
    console.log("Login to Facebook with scenario values: " + usernameParam + " and " + passwordParam);

    const FBPage = this.POManager.getFBLoginPage();

    console.log("Username from JSON: " + dataset.USERNAME_JSON);
    console.log("Password from JSON: " + dataset.PASSWORD_JSON);

    await FBPage.openFBURL();
    await FBPage.enterUsername(dataset.USERNAME_JSON);
    await FBPage.enterPassword(dataset.PASSWORD_JSON);
});


         