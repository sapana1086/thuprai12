class BasePage {
    constructor(page) {
        this.page = page; // Store Playwright's "page" instance
        this.baseURL = 'https://thuprai.com/'; // Define the base URL
    }

    async navigate(path = '') {
        await this.page.goto(`${this.baseURL}${path}`); // Navigate to the given path
    }
}
export default BasePage; 