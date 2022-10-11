@Login
Feature: Login
  As user i want to login to the sauce

  Scenario: Normal Login
    Given user open the web page
    When User input "standard_user" as username and "secret_sauce" as password
    Then  User is already on the landing page

  Scenario Outline: Invalid Login
    Given user open the web page
    When User input "<username>" as username and "<password>" as password
    Then User see error "<errorMassage>" on login page
    Examples:
      | username      | password | errorMassage                                                              |
      | asd           | password | Epic sadface: Username and password do not match any user in this service |
      | standard_user |          | Epic sadface: Password is required                                        |
      |               | password | Epic sadface: Username is required                                        |

