import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.searchBox = page.getByRole('textbox', { name: 'Search for books by title,' });
    }

    async searchBook(bookName) {
        await this.searchBox.fill(bookName);
        await this.searchBox.press('Enter'); // Press Enter to search
    }
}

export default HomePage;