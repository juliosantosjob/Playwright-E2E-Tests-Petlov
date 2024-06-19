import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/regist.page';
import { createDonationPoint } from '../samples/regist.sample';
import { DonationPoint } from '../types/donationPoint.type';

test.describe('Donation point registration', () => {
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

  test('Must successfully register a donation point', async () => {
    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifySuccess('Você fez a diferença!');
  });

  test('Should not register with an invalid email', async () => {
    donationPoint.email = 'invalid_email.com';

    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifyError('Informe um email válido');
  });

  test('Should not register with an invalid cep', async () => {
    donationPoint.cep = '00000';

    await registerPage.fillForm(donationPoint);
    await registerPage.verifyError('Informe um CEP válido');
  });

  test('Should not register with an invalid address number', async () => {
    donationPoint.addressNumber = '0';

    await registerPage.fillForm(donationPoint);
    await registerPage.submitForm();
    await registerPage.verifyError('Informe um número maior que zero');
  });

  test('Errors in registration with all fields empty', async () => {
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
