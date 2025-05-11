exports.OpenAccountPage = class OpenAccountPage {

    constructor(page){
        this.page = page;
        this.openNewAccountLink = this.page.getByRole('link', { name: 'Open New Account'});
        this.typeOfAccountDropDown = this.page.locator("select#type");
        this.openNewAccountButton = this.page.locator("input[value='Open New Account']");
        this.accountOpened = this.page.getByText('Account Opened!');

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