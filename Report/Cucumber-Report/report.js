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
  "duration": 7466099102,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1032339639,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 491817483,
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
  "duration": 1317148481,
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
  "duration": 184618390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "AccountPage.I_click_the_button(String)"
});
formatter.result({
  "duration": 975475915,
  "status": "passed"
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
formatter.match({
  "arguments": [
    {
      "val": "Account_Tab",
      "offset": 9
    }
  ],
  "location": "AccountPage.I_click_tab(String)"
});
formatter.result({
  "duration": 2843611784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts",
      "offset": 9
    }
  ],
  "location": "AccountPage.I_am_on_home_page(String)"
});
formatter.result({
  "duration": 433599670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 13
    }
  ],
  "location": "AccountPage.I_click_the_button(String)"
});
formatter.result({
  "duration": 852238382,
  "status": "passed"
});
formatter.match({
  "location": "AccountPage.I_enter_Account_Name_field()"
});
formatter.result({
  "duration": 482802051,
  "status": "passed"
});
formatter.match({
  "location": "AccountPage.I_should_see_the_Rating_field()"
});
formatter.result({
  "duration": 83390296,
  "status": "passed"
});
formatter.match({
  "location": "AccountPage.I_select_Hot_from_the_Rating_field()"
});
formatter.result({
  "duration": 125304547,
  "status": "passed"
});
formatter.match({
  "location": "AccountPage.I_click_the_save_button()"
});
formatter.result({
  "duration": 1652034210,
  "status": "passed"
});
formatter.match({
  "location": "AccountPage.I_should_see_the_Account_record()"
});
formatter.result({
  "duration": 83831465,
  "status": "passed"
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
  "duration": 1676078621,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 904584624,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 405632849,
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
  "duration": 1247622458,
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
  "duration": 355112170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "AccountPage.I_click_the_button(String)"
});
formatter.result({
  "duration": 749955874,
  "status": "passed"
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
formatter.match({
  "location": "AccountPage.I_create_an_Account(DataTable)"
});
formatter.result({
  "duration": 2616175,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method asMaps(Class\u003cK\u003e, Class\u003cV\u003e) in the type DataTable is not applicable for the arguments ()\n\n\tat stepDefination.AccountPage.I_create_an_Account(AccountPage.java:57)\n\tat ✽.And I create an Account(Feature/Account.feature:23)\n",
  "status": "failed"
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
  "duration": 2104163894,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 1375313199,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Khurrams-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:484:f53a:9a67:6865%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/kf/456qvlr53l3...}, goog:chromeOptions: {debuggerAddress: localhost:49847}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4084874128fe985aedcaa1fee6b72403\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat stepDefination.LoginTest.I_go_to_the_Salesforce_application(LoginTest.java:26)\n\tat ✽.When I go to the Salesforce application(Feature/login.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
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
      "offset": 13
    }
  ],
  "location": "AccountPage.I_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2101036699,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 582797568,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_maximize_my_window()"
});
formatter.result({
  "duration": 35598917,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Khurrams-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:484:f53a:9a67:6865%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/kf/456qvlr53l3...}, goog:chromeOptions: {debuggerAddress: localhost:49867}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 42c2dcb1cc3231b0d8a3546cf71bceb4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat stepDefination.LoginTest.I_maximize_my_window(LoginTest.java:69)\n\tat ✽.And I maximize my window(Feature/login.feature:8)\n",
  "status": "failed"
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
      "offset": 13
    }
  ],
  "location": "AccountPage.I_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
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