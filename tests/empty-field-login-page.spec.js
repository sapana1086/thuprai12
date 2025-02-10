import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  const emailValidationMessage = await page.locator('input[name="email"]').evaluate(el => el.validationMessage);
  expect(emailValidationMessage).toBe('Please fill out this field.');
});