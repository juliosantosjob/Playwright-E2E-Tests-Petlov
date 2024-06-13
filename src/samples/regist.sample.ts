import { faker } from '@faker-js/faker';

export function createDonationPoint() {
    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        cep: "06111-000",
        addressNumber: "1010",
        addressDetails: '123456'
    }
};