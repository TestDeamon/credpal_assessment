class Homepage {
    HomepageLocators = {
        brandLogo: ".router-link-active.router-link-exact-active.text-white",
        productMenu: '.flex-grow > :nth-child(1) > .relative > .flex > .font-heading',
        businessMenu: ':nth-child(1) > [href="/business"]',
        whatWeDoMenu: "a[href$='/faqs']",
        affiliateMenu: '[href="/sales"]',
        productsMenuDropdownItem1: '[href="/savings-and-investments"] > .flex > .font-bold',
        productsMenuDropdownItem2: "body > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > span:nth-child(1) > span:nth-child(1)",
        h1: "h1"
    };
    
    getBrandLogo() {
        return cy.get(this.HomepageLocators.brandLogo);
    }

    getProductMenu() {
        return cy.get(this.HomepageLocators.productMenu);
    }

    getBusinessMenu() {
        return cy.get(this.HomepageLocators.businessMenu);
    }

    getWhatWeDoMenu() {
        return cy.get(this.HomepageLocators.whatWeDoMenu);
    }

    getAffiliateMenu() {
        return cy.get(this.HomepageLocators.affiliateMenu);
    }

    getProductsMenuDropdownItem1() {
        return cy.get(this.HomepageLocators.productsMenuDropdownItem1);
    }

    getProductsMenuDropdownItem2() {
        return cy.get(this.HomepageLocators.productsMenuDropdownItem2);
    }

    getH1() {
        return cy.get(this.HomepageLocators.h1);
    }
}

export default Homepage;
