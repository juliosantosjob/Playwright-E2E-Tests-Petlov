import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/regist.page';
import { donationPoint } from '../samples/regist.json';

test.describe('Register a donation point', () => {
  let homePage: HomePage;
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    // instantiate page objects
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);

    // functions support in tests
    await homePage.openHome();
    await registerPage.goToRegister();
  });

  test('Register a valid donation point', async () => {
    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifySuccess('Você fez a diferença!');
  });

  test('Do not register with invalid email', async () => {
    donationPoint.email = 'example.com';

    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifyError('Informe um email válido');
  });

  test('Do not register with invalid CEP', async () => {
    donationPoint.cep = '11111111111';

    await registerPage.fillForm(donationPoint);
    await registerPage.verifyError('Informe um CEP válido');
  });
});
