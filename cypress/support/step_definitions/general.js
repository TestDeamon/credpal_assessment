const { Given, When, Then, And} = require("@badeball/cypress-cucumber-preprocessor");
import homepage from '../pom/homepage';

const Homepage = new homepage();

When("I visit credpal.com", () => {
  cy.visit("/");
  cy.url().should('equal', 'https://www.credpal.com/')
});
Then("I should land on the homepage", () => {
  Homepage.getBrandLogo().should('be.visible');
  Homepage.getProductMenu().should('be.visible');
  Homepage.getBusinessMenu().should('be.visible');
  Homepage.getWhatWeDoMenu().should('be.visible');
  Homepage.getAffiliateMenu().should('be.visible');
})

Then("I should see the brand logo", () => {
  Homepage.getBrandLogo().should('be.visible');
})
When("I click on products menu", () => {
  Homepage.getProductMenu().click({force: true, timeout: 2000})
  // cy.wait(2000)  
})
Then("I should see {string} and {string}", (item1, item2) => {
  Homepage.getProductsMenuDropdownItem1().should("have.text", item1);
  Homepage.getProductsMenuDropdownItem2().should("have.text", item2);
})

When("I click on the Business menu", ()=>{
  Homepage.getBusinessMenu().click();
})
Then("I confirm user has landed on the business", ()=>{
  Homepage.getH1().first()
    .should('have.text', 'Grow your business with CredPal Pay')
})
When("I click on the What We do menu", ()=>{
  Homepage.getWhatWeDoMenu().first().click();
})
Then("I confirm user has landed on the What We Do", ()=>{
  Homepage.getH1().first().should('have.text', " Frequently asked questions ")
})


When("I click on Savings and Investment", ()=>{
  Homepage.getProductsMenuDropdownItem1().click({force: true, timeout: 4000})
  cy.get('h1').should('have.text', 'Take control of your finances with CredPal savings.')
})
