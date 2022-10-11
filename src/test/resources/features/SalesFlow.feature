@SalesFlow
Feature: Sales Flow
  As user i want to login to the sauce

  Scenario: User makes a purchase with 2 item
    Given user open the web page
    When User input "standard_user" as username and "secret_sauce" as password
    Then  User is already on the landing page
    When User pick item "'Sauce Labs Backpack'" and checkout to cart
    When User pick item "'Sauce Labs Bolt T-Shirt'" and checkout to cart
    Then User will see a basket that has been filled with items that have been checkout
    And User input "Zein" as first name "Azhari" as last name and "20233" as postal code
    Then User will See Checkout Information Payment
    Then User will get information on the successful payment



