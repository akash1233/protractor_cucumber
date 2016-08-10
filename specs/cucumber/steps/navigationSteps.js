//var restCall = require ('../support/restHelper.js')

module.exports = function() {

  this.Given(/^I go to the website with url "([^"]*)"$/, function(url, next) {
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

  this.Then(/^The title of the page is(?: title)? "([^"]*)"$/,{timeout: 10000}, function(title, next) {
    var header = $('h1');

/*      header.getText().then(function(data) {
          expect(data).to.equal(title);
          next();
      }, function(error) {
          assert.fail(error);
          next();
      });*/

   expect(header.getText()).to.eventually.equal(title).and.notify(next);
  });
};
