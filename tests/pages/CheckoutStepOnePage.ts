import { Page } from '@playwright/test';

export class CheckoutStepOnePage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
  }

  async clickContinue() {
    await this.page.locator('[data-test="continue"]').click();
  }
}
