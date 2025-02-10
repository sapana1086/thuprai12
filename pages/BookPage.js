import BasePage from './BasePage';

class BookPage extends BasePage {
    constructor(page) {
        super(page);
        this.bookLink = page.locator('text=Muna-madan');
        this.buyNowButton = page.getByRole('button', { name: 'Buy now' });
    }

    async searchAndSelectBook(bookName) {
        await this.page.getByRole('textbox', { name: 'Search for books by title,' }).fill(bookName);
        await this.page.keyboard.press('Enter');

        // Ensure the search results page loads completely
        await this.page.waitForLoadState('domcontentloaded');

        // Waiting for the book link to appear before clicking
        await this.bookLink.waitFor({ state: 'visible', timeout: 10000 });
        await this.bookLink.click();
    }

    async buyBook() {
        await this.buyNowButton.waitFor({ state: 'visible', timeout: 10000 });
        await this.buyNowButton.click();
    }
}

export default BookPage;