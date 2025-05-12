exports.BillPayPage = class BillPayPage {

    constructor(page){
        this.page = page;
        this.payeeNameField = page.locator("input[name='payee.name']");
        this.payeeAddressField = page.locator("input[name='payee.address.street']");
        this.payeeCityField = page.locator("input[name='payee.address.city']");
        this.payeeStateField = page.locator("input[name='payee.address.state']");
        this.payeeZipCodeField = page.locator("input[name='payee.address.zipCode']");
        this.payeePhoneField = page.locator("input[name='payee.phoneNumber']");
        this.payeeAccountField = page.locator("input[name='payee.accountNumber']");
        this.payeeVerifyAccount = page.locator("input[name='verifyAccount']");
        this.amountField = page.locator("input[name='amount']");
        this.billPayLink = page.locator("a[href='billpay.htm']");
        this.sendPaymentButton = page.locator("input[value='Send Payment']");
    }

    async fillPayeeNameField() {
        await this.payeeNameField.fill("John Doe");
    }

    async fillPayeeAddressField() {
        await this.payeeAddressField.fill("123 Main St");
    }

    async fillPayeeCityField() {
        await this.payeeCityField.fill("New York");
    }

    async fillPayeeStateField() {
        await this.payeeStateField.fill("NY");
    }

    async fillPayeeZipCodeField() {
        await this.payeeZipCodeField.fill("10001");
    }

    async fillPayeePhoneField() {
        await this.payeePhoneField.fill("1234567890");
    }

    async fillPayeeAccountField() {
        await this.payeeAccountField.fill("987654321");
    }

    async fillPayeeVerifyAccountField() {
        await this.payeeVerifyAccount.fill("987654321");
    }

    async fillAmountField() {
        await this.amountField.fill("250");
    }

    async submitBillPayment() {
        await this.sendPaymentButton.click();
    }

    async completeBillPaymentForm() {
        await this.fillPayeeNameField();
        await this.fillPayeeAddressField();
        await this.fillPayeeCityField();
        await this.fillPayeeStateField();
        await this.fillPayeeZipCodeField();
        await this.fillPayeePhoneField();
        await this.fillPayeeAccountField();
        await this.fillPayeeVerifyAccountField();
        await this.fillAmountField();
        await this.submitBillPayment();
    }
};
