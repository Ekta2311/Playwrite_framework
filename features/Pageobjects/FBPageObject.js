
class FBPageObject {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('input[name="email"]');   // ✅ Save as property
        this.passwordField = page.locator('input[name="pass"]');
    }

    async openFBURL() {
        await this.page.goto('https://facebook.com/login');
    }

    async enterUsername(username) {
        await this.usernameField.fill(username); // ✅ Fill locator with string
    }

    async enterPassword(password) {
        await this.passwordField.fill(password); // ✅ Same here
    }
    /**
     * Handles the child window (new tab) scenario.
     * 1. Navigates to the test page with a link that opens a new window.
     * 2. Uses Promise.all to:
     *    - Wait for the 'page' event (which signals a new window/tab is opened)
     *    - Clicks the 'Click Here' link that triggers the new window
     * 3. Waits for the new page to finish loading.
     * 4. Waits for the specific element ('New Window' header) to be visible in the new window.
     * 5. (Optional) You can add more actions on the newPage object if you want to interact with the child window.
     */
    
async clickOnChildWindow() {
    // Step 1: Go to the page with the child window link
    await this.page.goto('https://the-internet.herokuapp.com/windows');

    // Step 2: Click the link that opens the new window
    await this.page.click('text=Click Here');

    // Step 3: Wait briefly to ensure the new window is created (not best practice, but works for this demo)
    await this.page.waitForTimeout(500); // Gives the browser time to open the new window

    // Step 4: Get all open pages (tabs/windows) in the context
    const pages = this.page.context().pages();

    // Step 5: The new page is usually the last one in the array
    const newPage = pages[pages.length - 1];

    // Step 6: Wait for the new page to finish loading
    await newPage.waitForLoadState();

    // Step 7: Wait for the 'New Window' header to be visible in the new window
    await newPage.locator('//h3[text()="New Window"]').waitFor({ state: 'visible' });

    // Step 8: (Optional) Add more actions on newPage if you want to interact with the child window
}
}
module.exports = FBPageObject;              
// or we can write it module.exports = {FBPageObject}; // Export the class


                    





