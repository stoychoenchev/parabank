exports.LoginPage = class LoginPage {

    constructor(page){
        this.page = page;
        this.paraBankAddress = "http://localhost:9090/parabank/index.htm";
        this.userName = "john";
        this.password = "demo";
        this.userNameLoginField = this.page.locator("input[name='username']");
        this.passwordLoginField = this.page.locator("input[name='password']");
        this.logginButton = this.page.locator("input[value='Log In']");
        this.registerButton = page.getByRole('link', { name: 'Register' });
        this.forgotLoginButton = page.getByRole('link', { name: 'Forgot login info?' });
    }

    async navigateToParaBank(){
        await this.page.goto(this.paraBankAddress);
        await this.page.waitForLoadState('load');
    }

    async login(){
        await this.navigateToParaBank();
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
    }

    async enterUsername(){
        await this.userNameLoginField.fill(this.userName);
    }

    async enterPassword(){
        await this.passwordLoginField.fill(this.password);
    }

    async clickLoginButton(){
        await this.logginButton.click();

    }

    async clickRegisterButton(){
        await this.registerButton.click();
    }


}