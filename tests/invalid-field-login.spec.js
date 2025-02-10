import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('ttt@gmailcom');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('pkr');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid email or password!')).toBeVisible();
  await expect(page).toHaveURL('https://thuprai.com/login');
});