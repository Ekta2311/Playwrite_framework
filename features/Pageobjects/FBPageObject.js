
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

}
module.exports = FBPageObject;
// or we can write it module.exports = {FBPageObject}; // Export the class



