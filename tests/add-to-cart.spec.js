import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await page.getByRole('link', { name: 'Milarepa' }).click();
  await page.getByPlaceholder('Qty').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Cart', exact: true }).click();
  await expect(page.getByText('Your Cart MilarepaBook Rs 600')).toBeVisible();
});