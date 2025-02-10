import BasePage from './BasePage.js';

class ContactUsPage extends BasePage {
    constructor(page) {
        super(page);
        this.contactUsLink = this.page.getByRole('link', { name: 'CONTACT US', exact: true });
        this.nameInput = this.page.getByRole('textbox', { name: 'Name' });
        this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
        this.phoneInput = this.page.getByRole('textbox', { name: 'Phone' });
        this.messageInput = this.page.getByRole('textbox', { name: 'Message' });
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    }

    async goToContactUs() {
        await this.contactUsLink.click();
    }

    async fillContactForm(name, email, phone, message) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.messageInput.fill(message);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}

export default ContactUsPage;
