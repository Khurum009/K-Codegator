$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
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
  "duration": 2044059689,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 3494159855,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 62731117,
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
  "duration": 261928725,
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
  "duration": 121494552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "LoginTest.i_click_the_button(String)"
});
formatter.result({
  "duration": 3604193607,
  "status": "passed"
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
  "duration": 997383614,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1758247965,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 52150099,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 97783055,
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
  "duration": 168116041,
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
  "duration": 137710676,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "duration": 994644590,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 3222529267,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 26603152,
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
  "duration": 328383618,
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
  "duration": 110629811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "LoginTest.i_click_the_button(String)"
});
formatter.result({
  "duration": 3641034394,
  "status": "passed"
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
  "duration": 1333978716,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1226100321,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 58009674,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 88984435,
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
  "duration": 167265758,
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
  "duration": 124875589,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
});