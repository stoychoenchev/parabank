exports.OpenAccountPage = class OpenAccountPage {

    constructor(page){
        this.page = page;
        this.openNewAccountLink = this.page.locator("a[href='openaccount.htm']");
        this.typeOfAccountDropDown = this.page.locator("select#type");
        this.openNewAccountButton = this.page.locator("input[value='Open New Account']");
        this.accountOpened =  this.page.locator("//a[@id='newAccountId']");
        this.accountType = this.page.locator("#accountType");

    }


    async openNewCheckingsAccount(){
        await this.typeOfAccountDropDown.selectOption({ label: 'CHECKING'});
        await this.openNewAccountButton.click();
    }

    async openNewSavingsAccount(){
        await this.typeOfAccountDropDown.selectOption({ label: 'SAVINGS'});
        await this.openNewAccountButton.click();
    }

}