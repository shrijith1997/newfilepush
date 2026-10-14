import { test, expect } from '@playwright/test';

test('image locating', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com');

  const logo = page.getByAltText('nopCommerce demo store');

  await expect(logo).toBeVisible();
  await expect(page.getByText('Welcome to our store')).toBeVisible();
});

test('text locating', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com');

  await expect(page.getByText('Welcome to our store')).toBeVisible();
});

test('click register link', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com');

  await page.getByRole('link', { name: 'Register' }).click();
});



