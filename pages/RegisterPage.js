exports.RegisterPage = class RegisterPage {

    constructor(page){
        this.page = page;
        this.logginButton = this.page.locator("input[value='Log In']");
        this.firstNameField = this.page.locator("input[id='customer.firstName']");
        this.lastNameField = this.page.locator("input[id='customer.lastName']");
        this.addressField = this.page.locator("input[id='customer.address.street']");
        this.cityField = this.page.locator("input[id='customer.address.city']");
        this.stateField = this.page.locator("input[id='customer.address.state']");
        this.zipCodeField = this.page.locator("input[id='customer.address.zipCode']");
        this.phoneField = this.page.locator("input[id='customer.phoneNumber']");
        this.ssnField = this.page.locator("input[id='customer.ssn']");
        this.userNameField = this.page.locator("input[id='customer.username']");
        this.passwordField = this.page.locator("input[id='customer.password']");
        this.confirmPasswordField = this.page.locator("input[id='repeatedPassword']");
        this.registrationButton = this.page.locator("input[value='Register']");
        this.registerPageAddress = "http://localhost:9090/parabank/register.htm";
    }


    async navigateToParaBankRegister(){
        await this.page.goto(this.registerPageAddress);
        await this.page.waitForLoadState('load');
    }

    async registerParaBank(){
       await this.navigateToParaBankRegister();
       await this.fillFirstNameField();
       await this.fillLastNameField();
       await this.fillAddressField();
       await this.fillCityField();
       await this.fillStateField();
       await this.fillZipCodeField();
       await this.fillPhoneField();
       await this.fillSSNField();
       await this.fillUserNameField();
       await this.fillPasswordField();
       await this.fillConfirmPasswordField();
       await this.registrationButton.click();
    }

    async fillFirstNameField(){
        await this.firstNameField.fill("FirstName");
    }

    async fillLastNameField(){
       await this.lastNameField.fill("LastName");
        
    }

    async fillAddressField(){
       await this.addressField.fill("Ulitsa 55");
    }

    async fillCityField(){
        await this.cityField.fill("Sofia");
    }

    async fillStateField(){
      await  this.stateField.fill("Sofia");
    }

    async fillZipCodeField(){
       await this.zipCodeField.fill("1000");
    }

    async fillPhoneField(){
      await  this.phoneField.fill("0884777999");
    }

    async fillSSNField(){
       await this.ssnField.fill("0044556677");
    }

    async fillUserNameField(){
       await this.userNameField.fill("stoycho1111");
    }

    async fillPasswordField(){
       await this.passwordField.fill("parolkata123.");
    }

    async fillConfirmPasswordField(){
       await this.confirmPasswordField.fill("parolkata123.");
    }
}