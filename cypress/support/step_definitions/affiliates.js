const { Given, When, Then, And} = require("@badeball/cypress-cucumber-preprocessor");
import AffiliatesPage from '../pom/affiliatespage';
import affiliatespage from '../pom/affiliatespage';
import homepage from '../pom/homepage';

const Homepage = new homepage();
const Affilatespage = new affiliatespage();

When("A user clicks on the Affiliates menu", ()=>{
    Homepage.getAffiliateMenu().click();
})
Then("They should land on the affialiates page", ()=>{
    cy.url().should("contain", "sales/");
    Affilatespage.getFormTitle().should("have.text", "Affiliate Onboarding Form")
})
Then("I should see first and last name, email, phone no, what will you like to sell fields", ()=>{
    Affilatespage.getFirstNameField().should('be.visible');
    Affilatespage.getLastNameField().should("be.visible");
    Affilatespage.getEmailField().should('be.visible');
    Affilatespage.getPhoneNoField().should("be.visible");
    Affilatespage.getWhatYouWantToSellLabelsText().each(($el, index, $list)=>{
        var arr = ['Credit', 'Investments'];
        cy.wrap($el.text()).should('eq', arr[index]);
    })
})

Then("A user fills fields", (table)=>{
    table.hashes().forEach(row =>{
        Affilatespage.getFirstNameField().type(row.firstName)
        Affilatespage.getLastNameField().type(row.lastName)
        Affilatespage.getEmailField().type(row.emailAddress)
        Affilatespage.getPhoneNoField().type(row.phoneNumber)
        Affilatespage.getWhatWillYouLikeToSellOptions().first().click();
        Affilatespage.getSubmitButton().click();

    })
})
When("I enter an invalid email", (table)=>{
    table.hashes().forEach((row)=>{
        Affilatespage.getFirstNameField().type(row.firstName)
        Affilatespage.getLastNameField().type(row.lastName)
        Affilatespage.getEmailField().type(row.invalid_email)
        Affilatespage.getPhoneNoField().type(row.phoneNumber)
        Affilatespage.getWhatWillYouLikeToSellOptions().first().click();
        Affilatespage.getSubmitButton().click();
    })
})
Then("I should see the error message {string}", (error)=>{
    Affilatespage.getErrorMessage().should('have.text', error);
})