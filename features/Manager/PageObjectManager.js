const FBPageObject = require('../Pageobjects/FBPageObject.js');
const InstaPageObject = require('../Pageobjects/InstaPageObject.js');


class PageObjectManager
{
    constructor(page)
    {
       this.page = page;
         this.FBLoginPage = new FBPageObject(this.page);
         this.InstaLoginPage=new InstaPageObject(this.page); 
    }
    getFBLoginPage()
    {
        return this.FBLoginPage;
    }
    getInstaLoginPage()
    {
        return this.InstaLoginPage;
    }

}
module.exports = PageObjectManager;