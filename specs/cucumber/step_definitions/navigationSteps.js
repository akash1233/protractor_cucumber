var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
module.exports = function () {
    this.setDefaultTimeout(60000);
    this.Given(/^I go to the website with url "([^"]*)"$/, function (url, next) {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().pageLoadTimeout(10000);
        browser.get(url);
        next();
    });

    this.When(/^I search the word "([^"]*)"$/, function (searchtext, next) {
        element(by.name('q')).sendKeys(searchtext)
        browser.sleep(3000)
        element(by.xpath('(//input[@name="btnK"])[1]')).click()
        browser.sleep(3000)
        next();
    });

    this.When(/^I click on button with text "([^"]*)"$/, function (buttonText, next) {
        element(by.buttonText(buttonText)).click();
        next();
    });

    this.Then(/^click the first search result page$/, function (next) {
        browser.sleep(3000)
        element(by.xpath('(//h3)[1]/a')).click()
        next();
    });
};