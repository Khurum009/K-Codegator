$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Account.feature");
formatter.feature({
  "line": 1,
  "name": "Test the fields in Account objects",
  "description": "",
  "id": "test-the-fields-in-account-objects",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Pa55word\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the \"Login\" button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 2904383303,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 624114419,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 384625512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 1972019883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 225324675,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "Verify the rating field and its options",
  "description": "",
  "id": "test-the-fields-in-account-objects;verify-the-rating-field-and-its-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Accounts"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click \"Account_Tab\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I am on \"Accounts\" home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click the \"new\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Account Name field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the Rating field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Hot from the Rating field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the save button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should see the Account record",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Pa55word\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the \"Login\" button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 1745445577,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1813210293,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 428273731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 1803238970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 424284590,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "Create complete Account",
  "description": "",
  "id": "test-the-fields-in-account-objects;create-complete-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Accounts"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I create an Account",
  "rows": [
    {
      "cells": [
        "Account name",
        "Rating",
        "Account Number",
        "Website"
      ],
      "line": 24
    },
    {
      "cells": [
        "Khurum",
        "Hot",
        "007",
        "http://codegator.com"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login funcionality",
  "description": "\nAS a valid user, i should be able to login to the application",
  "id": "test-login-funcionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funcionality;test-using-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "test-login-funcionality;test-using-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "test-login-funcionality;test-using-valid-credentials;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 24,
      "id": "test-login-funcionality;test-using-valid-credentials;;2"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 25,
      "id": "test-login-funcionality;test-using-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Pa55word\" password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the \"Login\" button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 1824312401,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 832253283,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 445516265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 1709430939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 593445554,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funcionality;test-using-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Pa55word\" password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the \"Login\" button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 1889638428,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 705537897,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 444009970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 1693288796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 505408277,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funcionality;test-using-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I maximize my window",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
});