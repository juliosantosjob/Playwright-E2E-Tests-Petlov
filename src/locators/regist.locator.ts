import { Locator, type Page } from '@playwright/test';

export class RegisterLocators {
    readonly page: Page;
    readonly linkSignUp: Locator;
    readonly headingMessage: Locator;
    readonly inputName: Locator;
    readonly inputEmail: Locator;
    readonly inputZipCode: Locator;
    readonly buttonSearchZipCode: Locator;
    readonly inputAddressNumber: Locator;
    readonly inputAddressDetails: Locator;
    readonly imageDog: Locator;
    readonly buttonSubmit: Locator;
    readonly divAlertError: Locator;
    
    constructor(page: Page) {
        this.page = page;
    
        this.linkSignUp = page.locator('a[href="/signup"]');
        this.headingMessage = page.locator('h1');
        this.inputName = page.locator('input[name="name"]');
        
        this.inputEmail = page.locator('input[name="email"]');
        this.inputZipCode = page.locator('input[name="cep"]');
        this.buttonSearchZipCode = page.locator('input[type="button"]');
    
        this.inputAddressNumber = page.locator('input[name="addressNumber"]');
        this.inputAddressDetails = page.locator('input[name="addressDetails"]');
        this.imageDog = page.locator('img[alt="Cachorros"]');
    
        this.buttonSubmit = page.locator('button[type="submit"]');
        this.divAlertError = page.locator('.alert-error');    
    }
}