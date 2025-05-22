const { Before, After, AfterStep , Status} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const PageObjectManager = require('../Manager/PageObjectManager.js'); // Import the page object

Before(async function () {  

 const browser = await chromium.launch({ headless: false }); // Launch browser
 const context = await browser.newContext();                 // Create browser context
  this.page = await context.newPage();                       // Open new page
  this.POManager = await new PageObjectManager(this.page);

}); 


After(function()
{
    console.log("After method");
});

AfterStep(async function ({ result }) {
  if (result?.status === Status.FAILED) {  //  Use 'Status' not 'status'
    await this.page.screenshot({ path: 'screenshot.png' });
    console.log('📸 Screenshot taken and saved as screenshot.png');
  }
});

