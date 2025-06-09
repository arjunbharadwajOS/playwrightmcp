import { Page } from '@playwright/test';

export class CheckoutStepTwoPage {
  constructor(private page: Page) {}

  async clickFinish() {
    await this.page.locator('[data-test="finish"]').click();
  }
}
