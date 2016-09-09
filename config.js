exports.config = {

  sauceUser: 'dharmendrasingh',
  sauceKey: 'e21c7bfb-7b48-4334-961f-cebc4078a457',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  restartBrowserBetweenTests: false,
  specs: ['specs/cucumber/exampleSpec.feature'],

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // relevant cucumber command line options
  cucumberOpts: {
    require: [
      'specs/cucumber/steps/*.js',
      'specs/cucumber/support/*.js'
    ],
    timeout: 10000,
    format: "pretty",
    tags: '@dev'
  },
  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
    browser.close();
    browser.quit();
  }

};
