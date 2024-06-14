import { Locator, type Page } from '@playwright/test';

export class RegisterLocators {
    readonly page: Page;
    readonly btn_signUp: Locator;
    readonly fld_message: Locator;
    readonly fld_name: Locator;
    readonly fld_email: Locator;
    readonly fld_zipCode: Locator;
    readonly btn_searchZipeCode: Locator;
    readonly fld_addressNumber: Locator;
    readonly fld_addressDetails: Locator;
    readonly img_dog: Locator;
    readonly btn_submit: Locator;
    readonly fld_alertError: Locator;

    constructor(page: Page) {
        this.page = page;

        this.btn_signUp = page.locator('a[href="/signup"]');
        this.fld_message = page.locator('h1');
        this.fld_name = page.locator('input[name="name"]');
        
        this.fld_email = page.locator('input[name="email"]');
        this.fld_zipCode = page.locator('input[name="cep"]');
        this.btn_searchZipeCode = page.locator('input[type="button"]');

        this.fld_addressNumber = page.locator('input[name="addressNumber"]');
        this.fld_addressDetails = page.locator('input[name="addressDetails"]');
        this.img_dog = page.locator('img[alt="Cachorros"]');

        this.btn_submit = page.locator('button[type="submit"]');
        this.fld_alertError = page.locator('.alert-error');
    }
}