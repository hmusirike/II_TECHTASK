const ServicesPage = require('../../page_objects/services/services.page');
const loginUrl = 'https://www.ii.co.uk/';
const timeout = 20000;


describe('Services', () => {
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to click on the Trading Account from Services dropdown', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // To click the services dropdown from the top navigation bar
        ServicesPage.clickOnServicesLink();
        // To check whether the Trading Account link is existing
        expect(ServicesPage.tradingAccountLink).toBeExisting();
        // To click the Trading Account link
        ServicesPage.clickOnTradingAccountLink();
        // To check you have landed on the expected URL
        expect(browser).toHaveUrl(loginUrl+'ii-accounts/trading-account');
        // To check whether the login link is clickable
        expect(ServicesPage.loginLink).toBeClickable();
        // Navigate to Transfer to ii page
        ServicesPage.navigateToTransferToUs();
        // To check you have landed on the expected URL
        expect(browser).toHaveUrl(loginUrl+'investing-with-ii/transferring-to-ii');
        //To check the heading of the page
        expect(ServicesPage.transferPageHeading).toBeDisplayed();
    })
})