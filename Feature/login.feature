Feature: Test login funcionality

AS a valid user, i should be able to login to the application

Background:
Given I Open Chrome Browser
    When I go to the Salesforce application
    And I maximize my window
    And I enter "batch03@codegator.us.qa" username
    And I enter "Pa55word" password
    When I click the "Login" button
Scenario Outline: Test Using Valid Credentials
    Given I Open Chrome Browser
    When I go to the Salesforce application
    And I maximize my window
    Then I should see the Salesforce logo
    And I enter "<username>" username
    And I enter "<password>" password
    When I click "Login" button
    Then I should see the logout link
   
    Examples: 
      | username                | password |
      | batch03@codegator.us.qa | Pa55word |
      | batch03@codegator.us.qa | Pa55word |

