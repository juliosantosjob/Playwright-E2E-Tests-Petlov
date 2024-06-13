import { Page, expect } from '@playwright/test';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHome() {
        await this.page.goto('/');
    }

    async seeInHome(message: string) {
        const homeTitle = this.page.locator('h1');
        await expect(homeTitle).toContainText(message);
    }
}
