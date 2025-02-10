import { test, expect } from '@playwright/test';
import ContactUsPage from '../pages/ContactUsPage';

test('Submit Contact us form', async ({ page }) => {
    const contactusPage = new ContactUsPage(page);

    // Navigate to the home page and go to Contact Us page
    await contactusPage.navigate();
    await contactusPage.goToContactUs();

    // Fill in the contact form
    await contactusPage.fillContactForm('testing testing', 'test@awecode.com', '9800000000', 'test');

    // Submit the form
    await contactusPage.submitForm();

});
