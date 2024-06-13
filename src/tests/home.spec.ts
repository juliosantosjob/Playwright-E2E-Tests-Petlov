import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Home', () => {
  test('Must access the APP home page', async ({ page }) => {
    const homePage: HomePage = new HomePage(page);
    await homePage.openHome();
    await homePage.seeInHome('Conectando corações, mudando vidas!');
  });
});
