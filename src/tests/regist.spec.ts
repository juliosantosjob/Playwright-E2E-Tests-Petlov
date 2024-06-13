import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/regist.page';
import { createDonationPoint } from '../samples/regist.sample';
import { DonationPoint } from '../types/donationPoint.type';

test.describe('Register a donation point', () => {
  let homePage: HomePage;
  let registerPage: RegisterPage;
  let donationPoint: DonationPoint;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    donationPoint = createDonationPoint();

    await homePage.openHome();
    await registerPage.goToRegister();
  });

  test('Register a valid donation point', async () => {
    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifySuccess('Você fez a diferença!');
  });

  test('Do not register with invalid email', async () => {
    donationPoint.email = 'invalid_email.com';

    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifyError('Informe um email válido');
  });

  test('Do not register with invalid CEP', async () => {
    donationPoint.cep = '00000';

    await registerPage.fillForm(donationPoint);
    await registerPage.verifyError('Informe um CEP válido');
  });

  test('Do not register with invalid address number', async () => {
    donationPoint.addressNumber = '00000';

    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifyError('Informe um número maior que zero');
  });

  test('Registration with all fields blank', async () => {
    const errorMessages = [
      'Informe o seu nome completo',
      'Informe o seu melhor email',
      'Informe o seu CEP',
      'Informe um número maior que zero'
    ];

    await registerPage.submitForm();
    await registerPage.verifyError(errorMessages);
  });
});
