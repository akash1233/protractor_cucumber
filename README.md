# protractor_cucumber
Example testproject with Protractor and Cucumber

Install
-------------
 1. Checkout this repository
 2. Install protractor: npm install -g protractor
 3. Install webdriver-manager: npm install -g webdriver-manager
 4. Start webdriver-manager: webdriver-manager start
 5. Install the project depependencies: npm install
 6  Run the tests: protractor config.js

Reporting
-------------
 1. In /spec/cucumber/support/hooks.js you can set the options for reporting
 2. The variable outputdir defines the report directory where you can find the HTML report
 3. In the function createHtmlReport you can set several options. Like name, title etc.
 
Helper classes
-------------
 1. In /spec/cucumber/support/ you find a restHelper for the stepDefinitions files
 2. The method getUrl expects a url and returns a promise with the repsons or error
 3. A similar method can  be used to generate a post or put restcall

ToDo
-------------
Page objects
