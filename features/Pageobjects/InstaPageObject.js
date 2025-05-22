class InstaPageObject {
  
    constructor(page) {
        this.page = page;
        this.usernameFieldinsta = page.locator('input[name="username"]');   // ✅ Save as property
        this.passwordFieldinsta = page.locator('input[name="password"]');
    }
    async openInstaURL() {
        await this.page.goto('https://www.instagram.com/accounts/login/');
    }
    async enterUsernameinsta(username) {
        await this.usernameFieldinsta.fill(username); // ✅ Fill locator with string
    }
    async enterPasswordinsta(password) {
        await this.passwordFieldinsta.fill(password); // ✅ Same here
    }
}
module.exports= InstaPageObject;