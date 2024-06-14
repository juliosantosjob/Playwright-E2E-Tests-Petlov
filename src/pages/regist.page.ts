import { expect } from '@playwright/test';
import { DonationPoint } from '../types/donationPoint.type';
import { RegisterLocators } from '../locators/regist.locator';

export class RegisterPage extends RegisterLocators {

    async goToRegister() {
        await this.btn_signUp.click();
        await expect(this.fld_message).toHaveText(/Cadastro de ponto de doação/);
    }

    async fillForm(donation: DonationPoint) {
        await this.fld_name.fill(donation.name);
        await this.fld_email.fill(donation.email);
        await this.fld_zipCode.fill(donation.cep);

        await this.btn_searchZipeCode.click()
        await this.fld_addressNumber.fill(donation.addressNumber);
        await this.fld_addressDetails.fill(donation.addressDetails);
        await this.img_dog.click();
    }

    async submitForm() {
        await this.btn_submit.click();
    }

    async verifySuccess(success: string) {
        await expect(this.fld_message).toHaveText(success);
    }

    async verifyError(error: string | string[]) {
        await expect(this.fld_alertError).toHaveText(error);
    }
}