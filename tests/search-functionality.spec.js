import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await expect(page.getByRole('textbox', { name: 'Search for books by title,' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Search for books by title,' }).click();
  await page.getByRole('textbox', { name: 'Search for books by title,' }).fill('the');
  await page.getByRole('link', { name: 'The 4-Hour Work Week The 4-' }).click();
});