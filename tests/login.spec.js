import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage'

test('test', async ({ page }) => {
    const loginPage = new LoginPage(page);

 //Login
    await loginPage.login('kushma@awecode.com', 'thuprai123');

});