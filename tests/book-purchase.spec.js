import { test } from '@playwright/test';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';
import CheckoutPage from '../pages/CheckoutPage';

test('Book Purchase Flow', async ({ page }) => {
    const homePage = new HomePage(page);
    const bookPage = new BookPage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.navigate();
    await homePage.searchBook('munamadan');
    await bookPage.searchAndSelectBook('munamadan'); 
    await bookPage.buyBook();
    await checkoutPage.fillDetails('test', 'test@awecode.com', '9842087566', 'tinkune');
    await checkoutPage.placeOrder();
});