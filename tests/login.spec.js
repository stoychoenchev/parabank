import { test, expect} from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage');
const { RegisterPage } = require('../pages/RegisterPage');
const { OpenAccountPage } = require('../pages/OpenAccountPage');
const { TransferFundsPage } = require('../pages/TransferFundsPage');
const { BillPayPage } = require('../pages/BillPayPage');


test.beforeEach(async ({ page }) => {
  // Clear cookies/storage (if tests share state)
  await page.context().clearCookies(); 
});

test('Navigate to ParaBank', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToParaBank();
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    const title = await page.title();
    console.log(title);
});

test('Verify that the userName login field is visible', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.userNameLoginField).toBeVisible();
})

test('Verify that the userName login field is clickable', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.userNameLoginField).toBeEnabled();
})

test('Verify that the password login field is visible', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.passwordLoginField).toBeVisible();
});

test('Verify that the password login field is clickable', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.passwordLoginField).toBeEnabled();
});

test('Verify that the login button is visible', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.logginButton).toBeVisible();
});

test('Verify that the login button is clickable', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.logginButton).toBeEnabled();
});

test('Verify that the register button is visible', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.registerButton).toBeVisible();
});

test('Verify that the register button is clickable', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.registerButton).toBeEnabled();
});

test('Verify that the forgot login info button is visible', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.forgotLoginButton).toBeVisible();
});

test('Verify that the forgot login info button is clickable', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToParaBank();
    await expect(login.forgotLoginButton).toBeEnabled();
});


test('Verify that the Firstname field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.firstNameField).toBeVisible();
})

test('Verify that the Firstname field is clickable', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.firstNameField).toBeEnabled();
})

test('Verify that the Lastname field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.lastNameField).toBeVisible();
})

test('Verify that the Lastname field is clickable', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.lastNameField).toBeEnabled();
})

test('Verify that the Address field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.addressField).toBeVisible();
})

test('Verify that the Address field is clickable', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.addressField).toBeEnabled();
})

  test('City field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.cityField).toBeVisible();
  });

  test('City field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.cityField).toBeEnabled();
  });

  test('State field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.stateField).toBeVisible();
  });

  test('State field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.stateField).toBeEnabled();
  });

  test('Zip Code field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.zipCodeField).toBeVisible();
  });

  test('Zip Code field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.zipCodeField).toBeEnabled();
  });

  test('Phone field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.phoneField).toBeVisible();
  });

  test('Phone field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.phoneField).toBeEnabled();
  });

  test('SSN field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.ssnField).toBeVisible();
  });

  test('SSN field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.ssnField).toBeEnabled();
  });

  test('Username field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.userNameField).toBeVisible();
  });

  test('Username field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.userNameField).toBeEnabled();
  });

  test('Password field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.passwordField).toBeVisible();
  });

  test('Password field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.passwordField).toBeEnabled();
  });

  test('Confirm Password field is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.confirmPasswordField).toBeVisible();
  });

  test('Confirm Password field is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.confirmPasswordField).toBeEnabled();
  });

  test('Confirm Register button is visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.registrationButton).toBeVisible();
  });

  test('Confirm Register button is enabled', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigateToParaBankRegister();
    await expect(registerPage.registrationButton).toBeEnabled();
  });



test('Verify that we are logged successfully', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();
        await expect(page).toHaveTitle("ParaBank | Accounts Overview");
})
//flaky
test('Verify that we are able to open new checkings account successfully', async ({page}) => {
        const open = new OpenAccountPage(page);
        const loginPage = new LoginPage(page);
        await loginPage.login();
        await expect(page).toHaveTitle("ParaBank | Accounts Overview");
        await open.openNewAccountLink.click();
        await page.waitForLoadState('networkidle');
        await open.openNewCheckingsAccount();   
})
//flaky 
test('Verify that we are able to open new savings account successfully', async ({page}) => {
        const open = new OpenAccountPage(page);
        const loginPage = new LoginPage(page);
        await loginPage.login();
        await expect(page).toHaveTitle("ParaBank | Accounts Overview");
        await open.openNewAccountLink.click();
        await page.waitForLoadState('networkidle');
        await open.openNewSavingsAccount();

})
//flaky
test('Transfer funds', async ({page}) => {
        const transfer = new TransferFundsPage(page);
        const loginPage = new LoginPage(page);
        await loginPage.login();
        await expect(page).toHaveTitle("ParaBank | Accounts Overview");
        await transfer.transferFundsLink.click();
        await transfer.transferFunds();
})

test('Pay a bill', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    const billPay = new BillPayPage(page);
    await billPay.billPayLink.click();
    await billPay.completeBillPaymentForm();
});