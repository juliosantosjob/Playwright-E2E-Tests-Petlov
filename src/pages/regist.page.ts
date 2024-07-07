import { expect } from '@playwright/test';
import { DonationPoint } from '../samples/fixtures';
import { RegisterLocators } from '../locators/regist.locator';

export class RegisterPage extends RegisterLocators {

    async goToRegister() {
        await this.linkSignUp.click();
        await expect(this.headingMessage).toHaveText(/Cadastro de ponto de doação/);
    }

    async fillForm(donation: DonationPoint) {
        await this.inputName.fill(donation.name);
        await this.inputEmail.fill(donation.email);
        await this.inputZipCode.fill(donation.cep);

        await this.buttonSearchZipCode.click();
        await this.inputAddressNumber.fill(donation.addressNumber);
        await this.inputAddressDetails.fill(donation.addressDetails);
        await this.imageDog.click();
    }

    async submitForm() {
        await this.buttonSubmit.click();
    }

    async verifySuccess(success: string) {
        await expect(this.headingMessage).toHaveText(success);
    }

    async verifyError(error: string | string[]) {
        await expect(this.divAlertError).toHaveText(error);
    }
}
