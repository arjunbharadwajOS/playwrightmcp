import { test, expect } from '@playwright/test';

test('CERN shop Atlas postcard price', async ({ page }) => {
  // Navigate to CERN shop
  await page.goto('https://visit.cern/shop');

  // Select "Postcards" in Category filter
  await page.getByLabel('Category').selectOption({ label: 'Postcards' });

  // Click Filter button
  await page.getByRole('button', { name: 'Filter' }).click();

  // Ensure "Atlas postcard" is present in the filtered results
  await expect(page.getByRole('heading', { name: /Atlas postcard/i })).toBeVisible();

  // Open "Atlas postcard" item (navigate directly due to overlay issue)
  await page.goto('https://visit.cern/node/609');

  // Verify the price is 1 CHF
  await expect(page.getByText('Price')).toBeVisible();
  await expect(page.getByText('1 CHF')).toBeVisible();
});
