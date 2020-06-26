Feature: Test the fields in Account objects
Background:
Given I Open Chrome Browser
    When I go to the Salesforce application
    And I maximize my window
    And I enter "batch03@codegator.us.qa" username
    And I enter "Pa55word" password
    When I click the "Login" button
@Accounts
  Scenario: Verify the rating field and its options
    
    When I click "Account_Tab" tab
    Then I am on "Accounts" home page
    And I click the "new" button
    And I enter Account Name field
    And I should see the Rating field
    And I select Hot from the Rating field
    When I click the save button
    Then I should see the Account record
    
@Accounts
  Scenario: Create complete Account
    And I create an Account
      | Account name | Rating | Account Number | Website              |
      | Khurum       | Hot   |            007 | http://codegator.com |
      
