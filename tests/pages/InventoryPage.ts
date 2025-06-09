import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart(productName: string) {
    // Only supports Sauce Labs Backpack for now
    if (productName === 'Sauce Labs Backpack') {
      await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}
