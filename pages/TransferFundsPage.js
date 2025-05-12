exports.TransferFundsPage = class TransferFundsPage {

    constructor(page){
        this.page = page;
        this.transferFundsLink = this.page.locator("a[href='transfer.htm']");
        this.amountField = this.page.locator("input[id='amount']");
        this.fromAccountDropDown = this.page.locator("select[id='fromAccountId']");
        this.toAccountDropDown = this.page.locator("select[id='toAccountId']");
        this.transferButton = this.page.locator("input[value='Transfer']");
        this.transferedAmount = this.page.locator("span[id='amountResult']");
        this.amount = "231";
    }


    async transferFunds(){
    await this.amountField.fill(this.amount);
    await this.fromAccountDropDown.selectOption({ index: 0 });
    await this.toAccountDropDown.selectOption({ index: 1 });
    await this.transferButton.click();


    }


}