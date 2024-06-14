import { Locator, Page, expect } from '@playwright/test';

export class HomeLocators {
    readonly page: Page;
    readonly homeTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeTitle = this.page.locator('h1');
    }
}