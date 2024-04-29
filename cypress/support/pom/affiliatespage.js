class AffiliatesPage {
    AffiliatesPageLocators = {
        firstNameField: "#first_name",
        lastNameField: "#last_name",
        emailField: "#email",
        phoneNoField: "#phone",
        whatWillYouLikeToSellOptions: "div[class='gap-5 grid grid-cols-1 sm:grid-cols-2'] span:nth-child(2)",
        submitButton: "form[class='max-w-[31.25rem]'] div[class='flex flex-col gap-4'] button",
        errorMessage: "[class='text-xs text-red-500 uppercase mt-2']",
        formTitle: "h1[class='font-bold font-heading mb-10 text-[2.25rem]']",
        whatYouWantToSellLabelsText: "form[class='max-w-[31.25rem]'] div > div:nth-child(5) label span.text-base"
    };
    
    getFirstNameField() {
        return cy.get(this.AffiliatesPageLocators.firstNameField);
    }

    getLastNameField() {
        return cy.get(this.AffiliatesPageLocators.lastNameField);
    }

    getEmailField() {
        return cy.get(this.AffiliatesPageLocators.emailField);
    }

    getPhoneNoField() {
        return cy.get(this.AffiliatesPageLocators.phoneNoField);
    }

    getWhatWillYouLikeToSellOptions() {
        return cy.get(this.AffiliatesPageLocators.whatWillYouLikeToSellOptions);
    }

    getSubmitButton() {
        return cy.get(this.AffiliatesPageLocators.submitButton);
    }

    getErrorMessage() {
        return cy.get(this.AffiliatesPageLocators.errorMessage);
    }

    getFormTitle() {
        return cy.get(this.AffiliatesPageLocators.formTitle);
    }

    getWhatYouWantToSellLabelsText() {
        return cy.get(this.AffiliatesPageLocators.whatYouWantToSellLabelsText);
    }
    fillAffiliatesForm(firstname, lastname, email, phoneNo, optionsIndex){
        getFirstNameField().type(firstname);
        getLastNameField().type(lastname);
        getEmailField().type(email)
        getPhoneNoField().type(phoneNo)
        getWhatWillYouLikeToSellOptions().nth(optionsIndex).click()
    }
}

export default AffiliatesPage;
