import { expect, type Page } from '@playwright/test';
import { DonationPoint } from '../types/donationPoint';

export class RegisterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToRegister() {
        await this.page.locator('a[href="/signup"]').click();
        
        const title = this.page.locator('h1')
        await expect(title).toContainText(/Cadastro de ponto de doação/);
    }

    async fillForm(donationPoint: DonationPoint) {
        await this.page.fill('input[name="name"]', donationPoint.name);
        await this.page.fill('input[name="email"]', donationPoint.email);
        await this.page.fill('input[name="cep"]', donationPoint.cep);

        await this.page.click('input[type="button"]');
        await this.page.fill('input[name="addressNumber"]', donationPoint.addressNumber);
        await this.page.fill('input[name="addressDetails"]', donationPoint.addressDetails);
        await this.page.click('img[alt="Cachorros"]');
    }

    async submitForm() {
        await this.page.click('button[type="submit"]');
    }

    async verifySuccess(success: string) {
        const msgSuccess = this.page.locator('h1')
        await expect(msgSuccess).toContainText(success);
    }

    async verifyError(error: string) {
        const msgError = this.page.locator('.alert-error')
        await expect(msgError).toContainText(error);
    }
}