import base from '@playwright/test';
import { faker } from '@faker-js/faker';

export interface DonationPoint {
    name: string;
    email: string;
    cep: string;
    addressNumber: string;
    addressDetails: string;
}

type fixtures = {
    createDonationPoint: () => Promise<DonationPoint>;
};

export default base.extend<fixtures>({
    createDonationPoint: async ({}, use) => {
        const createDonationPoint = async (): Promise<DonationPoint> => {
            return {
                name: faker.internet.userName(),
                email: faker.internet.email(),
                cep: "06111-000",
                addressNumber: "1010",
                addressDetails: '123456'
            };
        };
        
        await use(createDonationPoint);
    }
});
