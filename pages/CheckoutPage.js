import BasePage from './BasePage';

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.nameField = page.getByRole('textbox', { name: 'Name' });
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.phoneField = page.getByRole('textbox', { name: 'Phone' });
        this.countryDropdown = page.locator('div').filter({ hasText: /^Nepal$/ });
        this.countryInput = page.getByLabel('NepalLoading...');
        this.streetAddress = page.getByRole('textbox', { name: 'Street Address' });
        this.orderButton = page.getByRole('button', { name: 'ORDER' });
    }

    async fillDetails(name, email, phone, address) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.phoneField.fill(phone);
        await this.countryDropdown.click();
        await this.countryInput.fill('nepal');
        await this.page.locator('#vs1__listbox').click(); // Select Nepal
        await this.streetAddress.fill(address);
    }

    async placeOrder() {
        await this.orderButton.click();
    }
}

export default CheckoutPage;