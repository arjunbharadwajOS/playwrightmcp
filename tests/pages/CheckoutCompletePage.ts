import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  async verifyOrderComplete() {
    await expect(this.page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
  }
}
