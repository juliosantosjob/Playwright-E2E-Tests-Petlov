import { expect } from '@playwright/test';
import { HomeLocators } from '../locators/home.locator';

export class HomePage extends HomeLocators {

    async openHome() {
        await this.page.goto('/');
    }

    async seeInHome(message: string) {
        await expect(this.homeTitle).toHaveText(message);
    }
}
