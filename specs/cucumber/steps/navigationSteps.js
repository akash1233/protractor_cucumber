        var chai = require('chai').use(require('chai-as-promised'));
        var expect = chai.expect;
        module.exports = function() {
            this.setDefaultTimeout(60000);
          this.Given(/^I go to the website with url "([^"]*)"$/, function(url, next) {
              browser.ignoreSynchronization = true;
              browser.manage().timeouts().pageLoadTimeout(10000);
              browser.get(url);
            next();
          });

          this.When(/^I click on link with text "([^"]*)"$/, function(linkText, next) {
            element(by.linkText(linkText)).click();
            next();
          });

          this.When(/^I click on button with text "([^"]*)"$/, function(buttonText, next) {
            element(by.buttonText(buttonText)).click();
            next();
          });

          this.Then(/^The title of the page is(?: title)? "([^"]*)"$/, function(title, next) {
            var header = $('h1');
              header.getText().then(function(text) {
                  console.log('text: ' + text);
              })
              expect(header.getText()).to.eventually.equal(title).and.notify(next);
          });
        };
