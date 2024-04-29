Feature: homepage
  Background:
    When I visit credpal.com
    When A user clicks on the Affiliates menu

  Scenario: Access Affiliates screen 
    Then They should land on the affialiates page
  Scenario: Confirm fields are visible
    Then I should see first and last name, email, phone no, what will you like to sell fields
   
  Scenario Outline: Confirm user can not proceed without filling all required fields
    Then A user fills fields
    | firstName   | lastName  | emailAddress      | phoneNumber |
    | john       | Doe       | janedoe@mail.com  |07065526766  | 

  Scenario Outline: Confirm affiliates field does not allow invalid email 
    When I enter an invalid email
    Then I should see the error message "THIS FIELD HAS TO BE A VALID EMAIL ADDRESS."
    | firstName   | lastName  | invalid_email       | phoneNumber  |
    | john        | Doe       | data@@mail.com    |07065526766   | 
    |Jane         | Smith     | test@@test.com      | 070655252    |
  
    
