import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutStepOnePage } from './pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from './pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from './pages/CheckoutCompletePage';

function randomString(length: number) {
  return Math.random().toString(36).substring(2, 2 + length);
}

test('Saucedemo order flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();
  await cartPage.clickCheckout();
  await checkoutStepOnePage.fillInformation(randomString(5), randomString(7), randomString(5));
  await checkoutStepOnePage.clickContinue();
  await checkoutStepTwoPage.clickFinish();
  await checkoutCompletePage.verifyOrderComplete();
});
