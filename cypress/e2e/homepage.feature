Feature: homepage

  Background:
    When I visit credpal.com
  Scenario: Visit the homepage
    Then I should land on the homepage

  Scenario: Verify the brand logo is displayed on the website.
    Then I should see the brand logo

  Scenario: Verify the "Savings and Investment" and "Credit Builder" options are displayed when the user clicks on the "Products" menu item.
     When I click on products menu
     Then I should see "Savings & Investment" and "Credit Builder"

  Scenario: Access Savings and Investment screen
    When I click on products menu
    Then I should see "Savings & Investment" and "Credit Builder"
    When I click on Savings and Investment
  

  Scenario: Access Business screen 
    When I click on the Business menu
    Then I confirm user has landed on the business

  Scenario: Access What We Do screen 
    When I click on the What We do menu
    Then I confirm user has landed on the What We Do

