class ServicesPage {

    // Reusable selector getters that will help us to avoid selector duplicates

    get servicesLink() { return $('//span[@aria-label="Services dropdown"]'); }
    get tradingAccountLink() { return $('//span[contains(text(),"Trading Account")]'); }
    get loginLink() { return $('//span[contains(text(),"Log in")]'); }
    get transferToUs() { return $('//a[contains(text(),"transfer to us")]'); }
    get transferPageHeading() { return $('//h1[contains(text(),"Transfer your investments")]'); }
    
    // Helper methods to avoid code duplication

    clickOnServicesLink() {
        this.servicesLink.click();
    }

    clickOnTradingAccountLink() {
        this.tradingAccountLink.click();
    }

    navigateToTransferToUs() {
        this.transferToUs.click();
    }

}

module.exports = new ServicesPage();