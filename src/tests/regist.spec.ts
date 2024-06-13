import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/regist.page';
import { donationPoint } from '../samples/regist.sample';
import { DonationPoint } from '../types/donationPoint';

test.describe('Register a donation point', () => {
  let homePage: HomePage;
  let registerPage: RegisterPage;
  let donation: DonationPoint;

  test.beforeEach(async ({ page }) => {
    // instantiate page objects
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);

    // prepare test data
    donation = donationPoint();

    // functions support in tests
    await homePage.openHome();
    await registerPage.goToRegister();
  });

  test('Register a valid donation point', async () => {
    await registerPage.fillForm(donation);
    await registerPage.submitForm();
    await registerPage.verifySuccess('Você fez a diferença!');
  });

  test('Do not register with invalid email', async () => {
    donation.email = 'invalid_email';

    await registerPage.fillForm(donation);
    await registerPage.submitForm();
    await registerPage.verifyError('Informe um email válido');
  });

  test('Do not register with invalid CEP', async () => {
    donation.cep = '11111111111';

    await registerPage.fillForm(donation);
    await registerPage.verifyError('Informe um CEP válido');
  });
});
